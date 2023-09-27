import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  public adminData(): Observable<any> {
    return this.http.get('../../assets/admin-data.json')
  }

  //2nd method to receive data
  public adminDatacheck(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('../../assets/admin-data.json').subscribe((data) => {
        resolve(data);
      }, (err) =>
        reject({ type: 'error', error: err })
      );
    });
  }
}
