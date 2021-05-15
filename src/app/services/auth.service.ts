import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.apiUrl + "/api/auth";

  constructor(private httpClient: HttpClient) { }

  post(user) {
    return this.httpClient.post(this.url, user);
  }
}