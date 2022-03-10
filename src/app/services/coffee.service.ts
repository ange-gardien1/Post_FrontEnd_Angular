import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coffee } from '../models/coffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  baseURL: string = "http://localhost:3000/api/coffee";
  tokenKey: string = "myCoffeeToken";

  constructor(private http: HttpClient) { }

  getAllCoffee(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.baseURL);
  }

  getCoffee(coffeeId: string) {

  }

  createCoffee(newCoffee: Coffee) {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.post(this.baseURL, newCoffee, { headers: reqHeaders });
  }

  updateCoffee(updatedCoffee: Coffee) {

  }

  deleteCoffee(coffeeId: string) {

  }
}
