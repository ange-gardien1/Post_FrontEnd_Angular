import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    isLoggedIn = false;
    username? = '';

    constructor(private userService: UserService, private router: Router) {}

    ngOnInit(): void {
        this.userService.isLoggedIn.subscribe(loggedIn => {
            this.isLoggedIn = loggedIn;
            if (loggedIn) {
                this.userService.getCurrentUser().subscribe(user => {
                    this.username = user.username;
                });
            }
        });
    }

    logout() {
        this.userService.logout();
        this.router.navigate(['/']);
    }
}
