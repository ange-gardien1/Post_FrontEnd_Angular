import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = "https://localhost:5001/api/auth";

  constructor(private http: HttpClient) { }

  // Login Function
  // Component needs to pass an email and password as an object
  // On success, the component will get back a token that needs to get stored
  login(email: string, password: string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append('email', email);
    queryParams = queryParams.append('password', password);

    return this.http.get(`${this.baseURL}/login`, { params: queryParams })
      .pipe(tap((response: any) => {
        localStorage.setItem('myCoffeeToken', response.jwt);
      }));
  }

  // Signup function
  // Component needs to pass a User object with the collected form data
  // On success, the component will get a 200 status
  signUp(newUser: User){
    return this.http.post(`${this.baseURL}/register`, newUser);
  }
}