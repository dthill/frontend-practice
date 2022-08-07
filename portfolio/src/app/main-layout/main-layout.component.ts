import { Component, OnInit } from '@angular/core';
import { routeConstants } from '../constants/route-constants';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  readonly routeConstants = routeConstants;

  constructor() { }

  ngOnInit(): void {
  }

}
