declare const componentHandler: any;

import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.html',
})
export class DashboardComponent implements AfterViewInit {
  constructor() {
    console.log('dashboard component');
  }

  public ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
}
