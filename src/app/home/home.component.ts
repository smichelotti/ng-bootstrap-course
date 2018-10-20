import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public stepComplete = 0;
  @ViewChild('acc') acc: any;

  constructor() { }

  ngOnInit() {
  }

  nextButton(step) {
    this.stepComplete = step;
    this.acc.toggle(`panel${this.stepComplete + 1}`);
  }

  beforeChange($event) {
    if ($event.panelId === 'panel2' && this.stepComplete < 1) {
      $event.preventDefault();
    }
  
    if ($event.panelId === 'panel3' && this.stepComplete < 2) {
      $event.preventDefault();
    }
  }

}
