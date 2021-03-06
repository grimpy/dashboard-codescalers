import { Injectable }     from '@angular/core';
import { Http, Headers }  from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { DashComponent }  from './dash.component';

@Injectable()
export class DashService {
  // save auth token
  jwt = window.localStorage['jwt'];
  constructor(private http: Http) {}

  startOAuthFlow(callback, callunauth) {
    var options = 'left=100,top=10,width=600,height=600';
    var oauth = window.open('/connect-auth', null, options);
    var x = jwt => {
      this.jwt = jwt
      window.localStorage['jwt'] = jwt
      if (this.jwt == "Unauthorized"){
        callunauth()
      } else {
        callback()
      }
    };
    window['setJWT'] = x.bind(this)
  }

  getStatusSummary(environment) {
    var headers = new Headers();
    headers.append('Authorization', 'token ' + this.jwt);
    let dashUrl = '/getStatusSummary?environment=' + environment;
    return this.http.request(dashUrl, { headers: headers })
      .debounceTime(400)
      .distinctUntilChanged()
      .toPromise();
  }

  getOverallStatus(environment) {
    var headers = new Headers();
    headers.append('Authorization', 'token ' + this.jwt);
    let dashUrl = '/getOverallStatus?environment=' + environment;
    return this.http.request(dashUrl, { headers: headers })
      .debounceTime(400)
      .distinctUntilChanged()
      .toPromise()
  }

  getDetailedStatus(envionment, nid) {
    var headers = new Headers();
    headers.append('Authorization', 'token ' + this.jwt);
    let dashUrl = '/getDetailedStatus?environment=' + envionment + '&nid=' + nid;
    return this.http.request(dashUrl, { headers: headers })
      .debounceTime(400)
      .distinctUntilChanged()
      .toPromise();
  }

  getEnvironments() {
    var headers = new Headers();
    headers.append('Authorization', 'token ' + this.jwt);
    let dashUrl = '/environments';
    return this.http.request(dashUrl, { headers: headers })
      .debounceTime(400)
      .distinctUntilChanged()
      .toPromise()
  }
}