import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coffee } from '../models/coffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  baseURL: string = "https://localhost:5001/api/coffee";
  tokenKey: string = "myCoffeeToken";

  constructor(private http: HttpClient) { }

  // getCoffeeList
  // Component does not need to pass any parameter data
  // On success, the component should receive a list of Coffee objects
  getAllCoffee(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.baseURL);
  }

  // getCoffee
  // Component should pass in a CoffeeID
  // Component will receive a coffee item
  getCoffee(coffeeId: string) {

  }

  // createCoffeeList
  // Component should pass in Coffee object
  // On success, the component will get back a 200 status
  createCoffee(newCoffee: Coffee) {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.post(this.baseURL, newCoffee, { headers: reqHeaders });
  }

  // updateCoffee
  // Component passes in updated Coffee object
  // component receives success
  updateCoffee(updatedCoffee: Coffee) {

  }

  // deleteCoffee
  // Component passes in coffeeId
  // Component receives success response
  deleteCoffee(coffeeId: string) {

  }
}
