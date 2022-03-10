import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = "http://localhost:3000/api/users";

  constructor(private http: HttpClient) { }

  signUp(newUser: User){
    return this.http.post(this.baseURL, newUser);
  }

  login(username: string, password: string){
    let request = { username, password };

    return this.http.post(`${this.baseURL}/login`, request)
      .pipe(tap((response: any) => {
        localStorage.setItem('myCoffeeToken', response.token);
      }));
  }
}