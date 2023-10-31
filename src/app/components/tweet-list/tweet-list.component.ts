import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tweet } from 'src/app/models/tweet';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {

    @Input()
    tweetList: Tweet[] = [];

    @Input()
    canEdit: boolean = false;

    @Output()
    refreshFeed = new EventEmitter();

    constructor(private tweetService: TweetService) { }

    ngOnInit(): void {
    }

    deleteTweet(id: number) {
        this.tweetService.deleteTweet(id).subscribe(() => {
            this.refreshFeed.emit(true);
        })
    }
}
