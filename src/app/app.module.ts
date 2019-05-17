import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TweetsComponent } from './tweets/tweets.component';
import { TweetNewComponent } from './tweets/tweet-new/tweet-new.component';
import { TweetEditComponent } from './tweets/tweet/tweet-edit/tweet-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatCardModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TweetComponent } from './tweets/tweet/tweet.component';
import { TweetService } from './services/tweet.service';

@NgModule({
  declarations: [
    AppComponent,
    TweetsComponent,
    TweetNewComponent,
    TweetEditComponent,
    TweetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [TweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
