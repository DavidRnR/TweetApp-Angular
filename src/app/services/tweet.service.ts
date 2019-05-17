import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Tweet } from "../interfaces/interfaces";
import { Observable } from "rxjs";

@Injectable()
export class TweetService {
  urlTweets: string = "https://588126a9b810b0120011a497.mockapi.io/tweet";

  constructor (private http: HttpClient) { }

  /**
  * Load tweets
  * @param tweet
  * @param newText
  */
  getTweets() :Observable<any> {
    return this.http.get(this.urlTweets +'?sortBy=date&order=desc');
  }

  /**
  *Save a newTweet
  */
  saveTweet(newTwet: any)  {

    let json = JSON.stringify(newTwet);

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.urlTweets, json, {headers: headers});
    
  }

  /**
  *Delete a tweet
  */
  removeTweet(tweet: Tweet): Observable<any> {

    return this.http.delete(this.urlTweets+"/"+tweet.id);

  }

  /**
  *Edit a tweet
  */
  editTweet (tweet: Tweet): Observable<any> {
    tweet.edit = false;

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // ... Set content type to JSON

    return this.http.put(`${this.urlTweets}/${tweet.id}`, tweet, {headers: headers});
  }

  // ************************Private Methods*******************************

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body['error'] || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }


}
