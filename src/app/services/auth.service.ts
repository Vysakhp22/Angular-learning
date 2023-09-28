import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = `../../assets/admin-data.json`;
  public isLoggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  public adminData(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  //2nd method to receive data
  public adminDatacheck(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}`).subscribe((data) => resolve(data),
        (err) => reject({ type: 'error', error: err }));
    });
  }

  public loggedIn() {
    this.isLoggedIn = true;
  }
  public loggedOut() {
    this.isLoggedIn = false;
  }
}
