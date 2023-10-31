import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {

    searchText: string = '';
    users: User[] = [];
    noResults = false;

    constructor(private userService: UserService) { }

    ngOnInit(): void {
    }

    search() {
        if (this.searchText.trim() != '') {
            this.userService.searchUsers(this.searchText).subscribe(results => {
                this.users = results.map(r => new User(r));
                console.log(this.users)
                if (this.users.length == 0) {
                    this.noResults = true;
                }
            })
        }
    }

}
