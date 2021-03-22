import { NgModule } from '@angular/core';

import { NgxAmplitudeComponent } from './component/ngx-amplitude.component';
import { NgxAmplitudeService} from './service/ngx-amplitude.service';

@NgModule({
  declarations: [NgxAmplitudeComponent],
  providers: [NgxAmplitudeService],
  exports: [NgxAmplitudeComponent]
})
export class NgxAmplitudeModule { }
