import { Component, Input } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'a',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
  providers: [ApiService]
})
export class ShareComponent {
  @Input() code?: string;
  data: any;

  constructor(private apiService: ApiService) {}

  getData() {
    this.apiService.viewShare(this.code).subscribe(data => {
      this.data = data;
    });
  }
  

}