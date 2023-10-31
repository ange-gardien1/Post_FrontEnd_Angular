import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Tweet } from 'src/app/models/tweet';
import { TweetService } from 'src/app/services/tweet.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tweet-new',
  templateUrl: './tweet-new.component.html',
  styleUrls: ['./tweet-new.component.css']
})
export class NewTweetComponent implements OnInit {

  newTweet: Tweet = new Tweet({});
  isLoggedIn: boolean = false;

  @Output()
  tweetCreated = new EventEmitter();

  constructor(private tweetService: TweetService, private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
      this.userService.isLoggedIn.subscribe(loggedIn =>
        this.isLoggedIn = loggedIn);
  }

  addTweet() {
    this.tweetService.createTweet(this.newTweet).subscribe(() => {
        this.newTweet = new Tweet({});
        this.tweetCreated.emit(true);
    }, error => {
      console.log('Error: ', error)
      if (error.status === 401 || error.status == 403) {
        this.router.navigate(['signin']);
      }
    });
  }
}
