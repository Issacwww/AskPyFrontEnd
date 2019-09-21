import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private baseApi = 'http://35.226.74.88:8080/api/';
  constructor(public http: HttpClient) { }

  queryById(id): Observable<any>{
     return this.http.get(this.baseApi + 'post/'+id);
  }

  httpGet(query): Observable<any>{return this.http.get<any>(this.baseApi + 'query?query=' + query);}
}
