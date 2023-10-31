import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from '../models/tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  baseURL: string = "https://localhost:7091/api/tweets";
  tokenKey: string = "myTweeterToken";

  constructor(private http: HttpClient) { }

  getAllTweets(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(this.baseURL);
  }

  getTweet(tweetId: number): Observable<Tweet> {
    return this.http.get<Tweet>(`${this.baseURL}/${tweetId}`);
  }

  createTweet(newTweet: Tweet) {
    delete newTweet.createdOn;
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.post(this.baseURL, newTweet, { headers: reqHeaders });
  }

  getUserTweets(id: number) {
    return this.http.get<Tweet[]>(`${this.baseURL}/user/${id}`);
  }

  updateTweet(updated?: Tweet) {
    delete updated?.createdOn;

    let reqHeaders = {
        Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.put(`${this.baseURL}/${updated?.tweetId}`, updated, 
        { headers: reqHeaders });
  }

  deleteTweet(id: number) {
    let reqHeaders = {
        Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.delete(`${this.baseURL}/${id}`, { headers: reqHeaders });
  }
}
