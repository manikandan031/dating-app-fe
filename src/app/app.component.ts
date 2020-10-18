import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppUser} from "./models/app-user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Dating App';
  users : AppUser[];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<AppUser[]>('https://localhost:5001/api/appusers')
      .subscribe(data => {
        console.log(data);
        this.users = data;
      });
  }

}
