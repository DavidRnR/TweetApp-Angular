import { TweetService } from './../../services/tweet.service';
import { Tweet } from './../../interfaces/interfaces';
import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';


@Component({
  selector: 'tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  @Input() tweet: Tweet;
  @Output() remove: EventEmitter<Tweet> = new EventEmitter<Tweet>();

  spinner = false;

  constructor(private tweetService: TweetService) { }

  ngOnInit() {
  }

  onEditTweet() {
    this.tweet.edit = !this.tweet.edit;
  }

  onRemoveTweet() {
    this.spinner = true;
    this.tweetService.removeTweet(this.tweet).subscribe(
      data => {
        this.remove.emit(this.tweet);
        this.spinner = false;
      },
      err => {
        this.spinner = false;
        console.log(err);
      });
  }

}
