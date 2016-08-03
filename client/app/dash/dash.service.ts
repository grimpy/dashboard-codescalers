import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class DashService {
  constructor(private http:Http) {}
  result;
  getStatusSummary (callback) {

    let dashUrl = 'http://127.0.0.1:5000/getStatusSummary';
    this.http.request(dashUrl)
              .debounceTime(400)
              .distinctUntilChanged()
              .subscribe(callback);
  }
  getOverallStatus(callback) {

    let dashUrl = 'http://127.0.0.1:5000/getOverallStatus';
    this.http.request(dashUrl)
              .debounceTime(400)
              .distinctUntilChanged()
              .subscribe(callback);

  }
}

