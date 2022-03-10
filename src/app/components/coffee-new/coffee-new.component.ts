import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coffee } from 'src/app/models/coffee';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-coffee-new',
  templateUrl: './coffee-new.component.html',
  styleUrls: ['./coffee-new.component.css']
})
export class CoffeeNewComponent implements OnInit {

  newCoffee: Coffee = new Coffee();

  constructor(private coffeeService: CoffeeService, private router: Router) { }

  ngOnInit(): void {
  }

  addCoffee() {
    this.coffeeService.createCoffee(this.newCoffee).subscribe(() => {
      window.alert("Created Coffee Successfully");
      this.router.navigate(['coffee']);
    }, error => {
      console.log('Error: ', error)
      if (error.status === 401 || error.status == 403) {
        this.router.navigate(['signin']);
      }
    });
  }
}
