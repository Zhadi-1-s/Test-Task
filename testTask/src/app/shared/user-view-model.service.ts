import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { UserService } from './user.service';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class UserViewModelService {

  private combinedData:any;

  private userDataSubject = new BehaviorSubject<any[]>([])

  constructor(private userService: UserService, private userDataService: UserDataService) {
    this.loadData();
   }

  private loadData(){
    forkJoin({
      users: this.userService.getUsers(),
      userData: this.userDataService.getUserData()
    }).subscribe((data) => {
      this.combineData(data.users, data.userData);
    })
  }

  private combineData(users: any[], userData: any[]){
    this.combinedData = users.map((user) => ({
      ...user,
      ...userData.find((userDataItem) => userDataItem.user_id === user.id )
    }));

    this.userDataSubject.next(this.combinedData);
  }

  getUsersData$(){
    return this.userDataSubject.asObservable();
  }
}
