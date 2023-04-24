import { NgModule } from '@angular/core';
import { ShareComponent } from './share.component';
import { ApiService } from 'src/app/api.service';

@NgModule({
  declarations: [
    ShareComponent
  ],
  imports: [
  ],
  providers: [ApiService],
  bootstrap: [ShareComponent]
})
export class ShareModule { }