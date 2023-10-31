import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweet';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
  selector: 'app-all-tweets',
  templateUrl: './all-tweets.component.html',
  styleUrls: ['./all-tweets.component.css']
})
export class AllTweetsComponent implements OnInit {

  tweetList: Tweet[] = [];

  constructor(private tweetService: TweetService) { }

  ngOnInit(): void {
    this.refreshFeed();
  }

  refreshFeed() {
    this.tweetService.getAllTweets().subscribe(tweets => {
        this.tweetList = tweets.map(tweet => new Tweet(tweet)).sort((a, b) => b.tweetId - a.tweetId);
    });
  }
}
