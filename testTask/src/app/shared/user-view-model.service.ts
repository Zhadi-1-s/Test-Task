import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class UserViewModelService {

  private userDataSubject = new BehaviorSubject<any>(null)

  constructor(private userService: UserService, private userDataService: UserDataService) {
    this.loadUser();
    this.loadUserData();
   }

  private loadUser(){
      this.userService.getUsers().subscribe((data) => {
        this.userDataSubject.next(data);
      });
  }
  private loadUserData(){
    this.userDataService.getUserData().subscribe((data) => {
      this.userDataSubject.next(data)
    })
  }
  getUsersData$(){
    return this.userDataSubject.asObservable();
  }
}
