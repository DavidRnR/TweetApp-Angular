import { Component, Output, EventEmitter } from "@angular/core";
import { TweetService } from "../../services/tweet.service";
import { Tweet } from "../../interfaces/interfaces";

@Component({
  selector: 'tweet-new',
  templateUrl: 'tweet-new.component.html',
  styleUrls: ['tweet-new.component.css'],
  providers: [TweetService]
})
export class TweetNewComponent {

  tweetForm: string = null;
  spinner = false;

  @Output() newTweet: EventEmitter<Tweet> =  new EventEmitter<Tweet>();

  constructor(private tweetService: TweetService) {  }

  saveTweet() {
    this.spinner = true;
    const newTweet: Tweet = { tweet: this.tweetForm, ranking: 1, edit: false, isRemoved: false };

    this.tweetService.saveTweet(newTweet).subscribe(
      (tweetCreated: Tweet) => {
        this.tweetForm = null;
        this.spinner = false;
        this.newTweet.emit(tweetCreated);
      },
      err => {
        this.spinner = false;
        console.error(err);
      })
  }


}
