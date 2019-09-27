import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recursion',
  templateUrl: './recursion.component.html',
  styleUrls: ['./recursion.component.scss']
})
export class RecursionComponent implements OnInit {

  time = new Date().toLocaleTimeString();
  hours:number;
  minutes:number;
  seconds: number;
  stringtime = [
    {
      'hours': '',
      'minutes': '',
      'seconds': ''
    }
  ]
  stringsecond: string;
  i: number = 0;
  view: string;
  showntime: string;

  constructor() {
    // setInterval(() => this.onTimeNow(), 1000);
    
    this.stringtime[0].minutes = 'rotate(' + String(this.minutes) + 'deg)';
  }

  ngOnInit() {
    this.stringtime[0].hours = 'rotate(-90deg)';
    setInterval(() => this.onTimeNow(), 1000);
  }

  onTimeNow() {
    this.time = new Date().toLocaleTimeString();
    this.hours = new Date().getHours();
    if (this.hours > 12) {
      this.hours = this.hours - 12;
    }
    this.minutes = new Date().getMinutes();
    this.seconds = new Date().getSeconds();
    this.stringtime[0].hours = 'rotate(' + String((this.hours * 31.66) - 90) + 'deg)';
    this.stringtime[0].minutes = 'rotate(' + String((this.minutes * 6) - 90) + 'deg)';
    this.stringtime[0].seconds = 'rotate(' + String((this.seconds * 6) - 90) + 'deg)';
    this.stringsecond = this.stringtime[0].seconds;
    let rezul: string = String(this.time);
    // this.i = this.i + 1;
    this.showntime = this.time;
    // return this.view = String(this.i) + "  time: " + rezul + "  second: " + String(this.seconds) + " gradus: " + String(this.seconds * 6);
  }

  // Recursion() {
  //   this.onTimeNow();
  // }

}
