import { Injectable } from '@angular/core';
import { NgxAmpConfig } from '../ngx-amplitude.models';

declare var require: any;
const Amplitude = require('amplitudejs')

@Injectable()
export class NgxAmplitudeService {

  amp: any ;
  constructor() { }

  init(config: NgxAmpConfig) {
    this.amp = Amplitude.init(config)
  }
}
