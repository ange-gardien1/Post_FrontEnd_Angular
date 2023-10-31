import { User } from "./user";

export class Tweet {
    tweetId: number;
    message?: string;
    user?: User;
    createdOn?: string;

    constructor(tweet: any) {
        this.tweetId = tweet.tweetId ?? 0;
        this.message = tweet.message;
        this.user = tweet.user;
        this.createdOn = new Date(tweet.createdOn).toLocaleString();
      }
}
