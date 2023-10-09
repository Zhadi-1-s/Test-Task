import { Component, OnInit } from '@angular/core';
import { UserViewModelService } from 'src/app/shared/user-view-model.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  userData: any;

  combinedData: any;

  color = "gray"

  user:string = 'пользователь'

  constructor(private userViewModel: UserViewModelService){
    document.body.style.overflowX = 'hidden'
    document.body.style.backgroundColor = 'rgb(230,230,230)'
  }

  ngOnInit(): void {
    this.userViewModel.getUsersData$().subscribe((data) => {
      this.combinedData = data;
    })
  }

  changeColor(){
    this.color = "rgb(176,176,176)"
  }
  resetColor(){
    this.color = "gray"
  }

}
