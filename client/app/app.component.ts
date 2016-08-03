import { Component }         from '@angular/core';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

import { DashComponent }      from './dash/dash.component';

@Component({
  selector: 'my-app',
  template: `
    <my-dash></my-dash>
  `,
/*
  providers: [ HTTP_PROVIDERS ]
*/
  directives: [
    DashComponent
  ]
})
export class AppComponent { }
