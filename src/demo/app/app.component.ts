import { Component } from '@angular/core';
import { NgxAmplitudeService } from 'quickstart-lib';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  meaning: number;
  constructor(libService: NgxAmplitudeService) {
    this.meaning = libService.getMeaning();
  }
}
