import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiService]
})
export class AppComponent {
  title = 'Shareasy';
  data: any;

  constructor(private apiService: ApiService) {}

  getData() {
    this.apiService.newShare().subscribe(data => {
      this.data = data;
    });
  }
}