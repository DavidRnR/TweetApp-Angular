import { Component, Input } from "@angular/core";
import { TweetService } from "../../../services/tweet.service";
import { Tweet } from "../../../interfaces/interfaces";

@Component({
  selector: 'tweet-edit',
  templateUrl: 'tweet-edit.component.html',
  styleUrls: ['tweet-edit.component.css']
})

export class TweetEditComponent {

  @Input() tweet: Tweet = null;

  constructor(private tweetService: TweetService) {  }

  /**
    *Edit a tweet
  */
  onEditTweet() {
    this.tweetService.editTweet(this.tweet).subscribe(
      data => {
      },
      err => console.error(err));;
  }
}
