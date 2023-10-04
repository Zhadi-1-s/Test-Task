import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  users: any[] = [];

  constructor(private userService: UserService){}

  ngOnInit(): void {
      this.userService.getUsers().subscribe(
        data => {
          this.users = data;
        },
        error => {
          console.error(error.message);
        }
      )
  }

}
