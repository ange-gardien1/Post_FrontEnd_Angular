import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tweet } from 'src/app/models/tweet';
import { User } from 'src/app/models/user';
import { TweetService } from 'src/app/services/tweet.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-tweet',
  templateUrl: './edit-tweet.component.html',
  styleUrls: ['./edit-tweet.component.css']
})
export class EditTweetComponent implements OnInit {

    currentUser?: User;
    tweet?: Tweet;

    constructor(private userService: UserService, private tweetService: TweetService,
        private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        const tweetId = parseInt(this.route.snapshot.params.id) ?? 0;
        
        this.userService.getCurrentUser().subscribe(user => {
            this.currentUser = user;

            if (tweetId) {
                this.tweetService.getTweet(tweetId).subscribe(tweet => {
                    this.tweet = new Tweet(tweet);

                    if (this.tweet.user?.userId != this.currentUser?.userId) {
                        console.log('not your tweet');
                        this.router.navigateByUrl('/');
                    }
                });
            } else {
                this.router.navigateByUrl('/');
            }
        });
    }

    updateTweet() {
        this.tweetService.updateTweet(this.tweet).subscribe(() => {
            this.router.navigateByUrl('profile')
        }, error => {
          console.log('Error: ', error)
          if (error.status === 401 || error.status == 403) {
            this.router.navigate(['signin']);
          }
        });
    }
}
