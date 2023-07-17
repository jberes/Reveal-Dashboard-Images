import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RevealDashboardsListService {
  constructor(private http: HttpClient) { }

  public getDashboards(): Observable<any> {
    return this.http.get(`${environment.revealServer}dashboards`);
  }

  public getDashboardThumbnail(id: string): Observable<any> {
    return this.http.get(`${environment.revealServer}dashboards/${id}/thumbnail`);
  }
}
