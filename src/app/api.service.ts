import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  private apiUrlNew = 'https://localhost:7191/api/share/new';
  private apiUrlView = 'https://localhost:7191/api/share/';

  constructor(private http: HttpClient) {}

  newShare(): Observable<any> {
    return this.http.get(this.apiUrlNew);
  }

  viewShare(code?: string): Observable<any> {
    return this.http.get(this.apiUrlView + code);
  }
}
