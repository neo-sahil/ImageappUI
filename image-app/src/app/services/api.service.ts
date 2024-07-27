import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private getImagesUrl = 'http://localhost:5141/api/Images';
  constructor(private http: HttpClient) { }

  getImageList(): Observable<any> {
    return this.http.get<any>(this.getImagesUrl);
  }

}
