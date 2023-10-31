import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTweetComponent } from './components/tweet-new/tweet-new.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { AllTweetsComponent } from './components/all-tweets/all-tweets.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TweetListComponent } from './components/tweet-list/tweet-list.component';
import { EditTweetComponent } from './components/edit-tweet/edit-tweet.component';
import { SearchUsersComponent } from './components/search-users/search-users.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTweetsComponent,
    NewTweetComponent,
    SignUpComponent,
    SignInComponent,
    ProfileComponent,
    TweetListComponent,
    EditTweetComponent,
    SearchUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
