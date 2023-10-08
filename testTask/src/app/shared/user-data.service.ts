import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private apiUrl = ' http://localhost:3000/data ';

  constructor(private http: HttpClient) { }


    getUserData() : Observable<any>{
      return this.http.get<any>(this.apiUrl);
    }

}
