import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { User } from '../../model/login'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LandRService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  url= '../../../assets/data/login.json'
  constructor(private http : HttpClient) { } 
  getUser() : Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  adduser(user : User): Observable<User> {
    return this.http.post<User>(this.url , user , this.httpOptions);
  }
  
}
