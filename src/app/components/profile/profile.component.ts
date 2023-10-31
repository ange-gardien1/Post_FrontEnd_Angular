import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tweet } from 'src/app/models/tweet';
import { User } from 'src/app/models/user';
import { TweetService } from 'src/app/services/tweet.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    currentUser?: User;
    profileUser?: User;
    userTweets: Tweet[] = [];
    myProfile: boolean = false;

    constructor(private userService: UserService, private route: ActivatedRoute,
        private tweetService: TweetService) { }

    ngOnInit(): void {
        const id = parseInt(this.route.snapshot.params.id) ?? 0;

        this.userService.getCurrentUser().subscribe(user => {
            this.currentUser = new User(user);
            if (!id && user) {
                this.profileUser = user;
                this.myProfile = true;
                this.getPosts(user.userId ?? 0);
            } 
            else {
                this.myProfile = id == this.currentUser.userId;
            }
        });

        if (id) {
            this.userService.getUser(id).subscribe(user => {
                this.profileUser = new User(user)
                this.getPosts(user?.userId ?? 0);
            });
        }
    }

    getPosts(id: number) {
        this.tweetService.getUserTweets(id).subscribe(tweets =>
            this.userTweets = tweets.map(tweet => new Tweet(tweet)));
    }

}
