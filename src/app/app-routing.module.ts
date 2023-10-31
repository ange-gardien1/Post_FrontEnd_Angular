import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTweetComponent } from './components/tweet-new/tweet-new.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AllTweetsComponent } from './components/all-tweets/all-tweets.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditTweetComponent } from './components/edit-tweet/edit-tweet.component';
import { SearchUsersComponent } from './components/search-users/search-users.component';

const routes: Routes = [
  { 
    path: "",
    redirectTo: "/tweets",
    pathMatch: "full"
  },
  {
    path: "signin",
    component: SignInComponent
  },
  {
    path: "signup",
    component: SignUpComponent
  },
  {
    path: "tweets",
    component: AllTweetsComponent
  },
  {
    path: "tweet/new",
    component: NewTweetComponent
  },
  {
      path: "profile/:id",
      component: ProfileComponent
  },
  {
      path: "profile",
      component: ProfileComponent
  },
  {
      path: "edit/:id",
      component: EditTweetComponent
  },
  {
      path: "search",
      component: SearchUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
