import { Component, OnInit }        from '@angular/core';
import { HTTP_PROVIDERS }  from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { DashService } from './dash.service';

@Component({
  selector: 'my-dash',
  template: `
    <h1>TEST</h1>
    <h3><i>Get Dashboard Data</i></h3>

    <p><i>Overall status</i></p>
    <p>{{OverallStatus}}</p>

    <p><i>Summary status</i></p>
    <p>{{StatusSummary}}</p>

  `,
  providers: [DashService, HTTP_PROVIDERS]
})

export class DashComponent implements OnInit {
  OverallStatus: Observable<string>;
  StatusSummary: Observable<string>;
  count = 0;
  id;
  constructor (private dashService: DashService) {

  this.id = setInterval(() => {
      this.getOverallStatus();
      this.getStatusSummary();
    }, 10000);

  }

  ngOnInit(){
    this.getOverallStatus();
    this.getStatusSummary();
  }

  getOverallStatus() {
    this.dashService.getOverallStatus(response => this.OverallStatus = response.text());   
    this.count += 1;
    console.log(this.count);
  }
  getStatusSummary(){
    this.dashService.getStatusSummary(response => this.StatusSummary = response.text());    
    this.count += 1;
    console.log(this.count);
    
  }
}
