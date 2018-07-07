import { Injectable } from '@angular/core';
import {User} from '../../../server/models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";

  constructor(private http: HttpClient) { }

  registerNewUser(user){
    return this.http.post<any>(this._registerUrl, user);
  }

  validateUser(user){
    return this.http.post(this._loginUrl, user);
  }
}
