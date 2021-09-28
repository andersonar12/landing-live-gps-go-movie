import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { ResponsePlans } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class AffiliationService {

  public apiUrl = environment.apiUrl + '/api'
  public token:string
  public profileUser

  constructor(private http: HttpClient) {}

  getPlans(){
    const endpoint = `${this.apiUrl}/plans`;
    const headers = new HttpHeaders({'Accept': '*/*'})

    return this.http.get<ResponsePlans>(endpoint, { headers: headers})  
  }

  sendAplication(data:any) {
    const endpoint = `${this.apiUrl}/benefit_requests`;
    const headers = new HttpHeaders({'Content-Type': 'application/json','Accept': '*/*'})

    const body = {
        benefit_request: {
          ...data,
          /* plan_id: 1 */
      }
    }

    return this.http.post<any>(endpoint, JSON.stringify(body), { headers: headers})  
  }


}
