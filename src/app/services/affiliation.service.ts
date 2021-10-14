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

  sendMail(data){
    const endpoint = `http://message-backend.gestsol.io:8000/send-email`;

    debugger
    const body = {
      to: `${data.email}`,
      subject: "Solicitud de Beneficio Live-Gps",
      content: `<div style='display: flex!important;justify-content: center!important; '>
      <div>
        <div style='text-align: center!important;box-shadow: 0px 3px 6px #00000029!important;'>
          <br>
          <img src='https://landing-pullman-bus.netlify.app/assets/images/live-gps.png' style='width: 180px;' alt='' srcset=''>
          <br>
          
          <img src='https://landing-pullman-bus.netlify.app/assets/images/pullman-2.svg' style='width: 122px;' alt=''>
    
        </div>
        <div style='text-align: center; padding: 30px; width: 480px; box-shadow: 0px 3px 3px #00000029!important; color: black;'>
      
          <p style='text-align:start!important'>¡Hola ${data.first_name}! Hemos recibido tu solicitud para contratar Live GPS. Tras comprobar que eres beneficiario, enviaremos un correo a esta misma dirección para que escojas el método de entrega de tu producto. </p>
          <p style='text-align:start!important'>Estos son los datos que utilizaste al enviar tu solicitud de Live GPS para conectar hasta 2 vehículos al equipo:</p>
      
          <br>
          <div style='background: #FFFFFF !important;box-shadow: 2px 2px 6px #0000001A!important;border: 1px solid #EDEDED!important;border-radius: 5px!important; padding: 0px 20px!important;text-align: center!important'>
            <p style='color: #363636!important; margin-bottom: 0px!important;font-weight: bold!important;'><strong>${data.first_name} ${data.last_name}</strong>  </p>
            <p style='color: #363636!important; margin-bottom: 0px!important;font-weight: bold!important;'><strong>${data.rut}</strong> </p>
            <p style='color: #363636!important; margin-bottom: 0px!important;font-weight: bold!important;'><strong>${data.email}</strong>  </p>
          </div>
          <br>
      
          <p style='text-align:start!important'>Recuerda que también puedes solicitar tu cuenta en Go! Movie por tan sólo $1.490 como beneficio especial para funcionarios de Pullman Bus.</p>
      
          <br>
          <br>
          <a href='https://landing-pullman-bus.netlify.app/home/' target='_blank' style='text-decoration: none;'><span style='color: white;padding: 15px; background-color: #FF5021;box-shadow: 2px 2px 5px #7C290080;
            border-radius: 10px;font-weight: bold;'>SOLICITAR GO! MOVIE</span> </a>
      
        </div>
      </div>
    </div>
  `
  }

    return this.http.post<any>(endpoint, body, /* { headers: headers} */)  
  }

  sendWhatsapp(data){
    const endpoint = `http://message-backend.gestsol.io:3002/whatsapp/sendmessage`;

    const body = {
      "code": data.prefix,
      "phone": data.phone_number,
      "message": `¡Hola ${data.first_name}! Hemos recibido tu solicitud para contratar Live GPS. Tras comprobar que eres beneficiario, enviaremos un correo electronico para que escojas el método de entrega de tu producto.`
  }

    return this.http.post<any>(endpoint, body, /* { headers: headers} */)  
  }



}
