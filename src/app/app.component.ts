import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppUser} from "./models/app-user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

}
