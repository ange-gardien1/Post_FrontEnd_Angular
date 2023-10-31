import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = "https://localhost:7091/api/users";
  private tokenName: string = 'myTweeterToken';

  private _isLoggedIn = new BehaviorSubject(false);
  isLoggedIn = this._isLoggedIn.asObservable();

  constructor(private http: HttpClient) {
      if (localStorage.getItem(this.tokenName)) {
          this._isLoggedIn.next(true);
      }
  }

  signUp(newUser: User){
    delete newUser.createdOn;
    return this.http.post(this.baseURL + '/register', newUser);
  }

  login(username: string, password: string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append('username', username);
    queryParams = queryParams.append('password', password);

    return this.http.get(`${this.baseURL}/login`,  { params: queryParams, responseType: 'text' })
      .pipe(tap((response: any) => {
          localStorage.setItem(this.tokenName, response);

          if (response) {
            this._isLoggedIn.next(true);
          }
          else {
              this._isLoggedIn.next(false);
          }
      }));
  }

  logout() {
    localStorage.removeItem(this.tokenName);
    this._isLoggedIn.next(false);
  }

  getCurrentUser(): Observable<User> {
    let reqHeaders = {
        Authorization: `Bearer ${localStorage.getItem(this.tokenName)}`
    }

    return this.http.get<User>(`${this.baseURL}/current`, { headers: reqHeaders })
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/${id}`)
  }

  searchUsers(searchText: string): Observable<User[]> {
      return this.http.get<User[]>(`${this.baseURL}/search/${searchText}`)
  }
}