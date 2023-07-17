using Reveal.Sdk;
using System.Security.AccessControl;
using System.Security.Principal;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers().AddReveal();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
  options.AddPolicy("AllowAll",
    builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()
  );
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

if (app.Environment.IsDevelopment())
{
  app.UseCors("AllowAll");
}

app.UseAuthorization();

app.MapControllers();

app.MapGet("/dashboards/{id}/thumbnail", async (string id) =>
{
    var path = $"Dashboards/{id}.rdash";
    if (File.Exists(path))
    {
        var dashboard = new Dashboard(path);
        var info = await dashboard.GetInfoAsync(Path.GetFileNameWithoutExtension(path));
        return Results.Ok(info);
    }
    else
    {
        return Results.NotFound();
    }
});


app.MapGet("/dashboards", async (HttpContext context) =>
{
    string folderPath = Path.Combine(Directory.GetCurrentDirectory(), "Dashboards");
    if (!Directory.Exists(folderPath))
    {
        context.Response.StatusCode = StatusCodes.Status404NotFound;
        await context.Response.WriteAsync("Folder not found");
        return Results.NotFound();
    }

    var files = Directory.GetFiles(folderPath);
    var fileData = files.Select(f => new
    {
        Name = Path.GetFileNameWithoutExtension(f),
        DateCreated = File.GetCreationTime(f),
        DateModified = File.GetLastWriteTime(f),
        Owner = GetFileOwner(f)
    }).ToList();
    return Results.Ok(fileData);
    //await context.Response.WriteAsJsonAsync(fileData);
});


string GetFileOwner(string filePath)
{
    FileInfo fileInfo = new FileInfo(filePath);
    return Path.GetFileName(fileInfo.GetAccessControl().GetOwner(typeof(System.Security.Principal.NTAccount)).ToString());
}

app.Run();
