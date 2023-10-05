import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  users: any[] = [];

  color = "gray"

  constructor(private userService: UserService){
    document.body.style.overflow = 'hidden'
    document.body.style.backgroundColor = 'rgb(230,230,230)'
  }

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

  changeColor(){
    this.color = "rgb(176,176,176)"
  }
  resetColor(){
    this.color = "gray"
  }

}
