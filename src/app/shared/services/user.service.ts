import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../core/services/api.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user_url = environment.server_url + "/user/";

  constructor(private apiService: ApiService, private http: HttpClient) { }

  //get data of individual user
  // Updated parameter to include type for TypeScript strict mode compatibility in Angular 12
  getUserData(user_id: string): Observable<any> {
    return this.apiService.get(this.user_url + user_id);
  }
  //update data of individual user
  // Updated parameters to include types for TypeScript strict mode compatibility in Angular 12
  updateUserData(user_id: string, user_dto: any): Observable<any> {
    return this.apiService.put(this.user_url + user_id, user_dto);
  }
}