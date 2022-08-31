import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FileService {
  readonly baseURL = 'http://localhost:3000/api/resetdata';

  constructor(private http: HttpClient) {}

  resetdata(nom): Observable<any> {
    const body = { nom };
    return this.http.post(this.baseURL, body, { responseType: 'text' });
  }
  resetdatamois(nom): Observable<any> {
    const body = { nom };
    return this.http.post(this.baseURL, body, { responseType: 'text' });
  }
}
