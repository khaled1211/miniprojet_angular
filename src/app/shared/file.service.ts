import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FileService {
  readonly baseURL = 'http://localhost:3000/api/resetdata';

  constructor(private http: HttpClient) {}

  resetdata(nom) {
    const body = { nom };
    return this.http.post(this.baseURL, body);
  }
}
