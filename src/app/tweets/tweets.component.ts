import { Component, OnInit } from "@angular/core";
import { TweetService } from "../services/tweet.service";
import { Tweet } from "../interfaces/interfaces";

@Component({
  selector: 'tweets',
  templateUrl: 'tweets.component.html',
  styleUrls: ['tweets.component.css']
})
export class TweetsComponent implements OnInit {

  tweets: Tweet[] = null;
  spinners = {
    tweets: false,
    remove: false
  };

  constructor(private tweetService: TweetService) { }

  ngOnInit() {
    this.loadTweets();
  }

  onNewTeet(newTweet: Tweet) {
    this.tweets.unshift(newTweet);
  }

  removeTweet(tweet: Tweet) {
   this.tweets = this.tweets.filter( (tw: Tweet) => {
     return tw.id !== tweet.id;
   });
  }

  private loadTweets() {
    this.spinners.tweets = true;
    this.tweetService.getTweets().subscribe(
      data => {
        this.tweets = data;
        this.spinners.tweets = false;
      },
      err => {
        this.spinners.tweets = false;
        console.error(err);
      } 
    )
  }
}
