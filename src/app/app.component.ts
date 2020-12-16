import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  hideHome: boolean;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  onMenuClick() {
    this.hideHome = true;
  }
}
