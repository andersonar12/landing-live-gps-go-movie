import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Subject } from 'rxjs';
import { AffiliationService } from 'src/app/services/affiliation.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-affiliation-live-gps',
  templateUrl: './affiliation-live-gps.page.html',
  styleUrls: ['./affiliation-live-gps.page.scss'],
})
export class AffiliationLiveGpsPage implements OnInit {

  @ViewChild('stepper') public myStepper: MatStepper;

  @ViewChild('backHome', {read: ElementRef}) backHome: ElementRef

  public applicationDone = true

  /* Un ejemplo de como usar el Subject para escuchar cuando una variable cambia de valor */
  private indexStteper: Subject<any> = new Subject<any>();   
  public indexStteperObs = this.indexStteper.asObservable();

  indexStep:number = 0

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = true;

  options: string[] = ['1 vehículo conectado por $10.490.', '2 vehículos conectados por $19.490.', '3 vehículos conectados por $28.790',];

  constructor(private _formBuilder: FormBuilder, public affiliationService:AffiliationService) {}

  ngOnInit() {

    /* Aqui escuchamos lo que emite el observable */
    this.indexStteperObs.subscribe((res) => {
      console.log('Desde Stepper Observable',res)
      this.indexStep = res 
    }) 
    /* Aqui escuchamos lo que emite el observable */


    this.firstFormGroup = new FormGroup({
      first_name:new FormControl( '', Validators.required),
      last_name:new FormControl( '', Validators.required),
      rut:new FormControl('', [Validators.required,Validators.minLength(8)]),
      email:new FormControl('', [Validators.required,Validators.email]),
      prefix:new FormControl( '', Validators.required),
      phone_number:new FormControl('', Validators.required),
      service_extra: new FormControl( false),
      /* password: new FormControl('', [Validators.required,Validators.minLength(8)]), */
    });
    this.secondFormGroup = this._formBuilder.group({
      plan: ['', Validators.required]
    });

   /*  setInterval(() => {          
      console.log(this.myStepper);
     }, 2000); */
  }

  goBack(stepper: MatStepper) {
    stepper.previous();
  }

  async goForward(stepper: MatStepper) {
    console.log(this.firstFormGroup.value);
    stepper.next();
  }

  async sendApplication(){
    this.presentLoader()
    console.log(this.secondFormGroup.value);

    await this.affiliationService.sendAplication(this.firstFormGroup.value).toPromise().then((resp)=>{
      
      console.log(resp);
    
    }).catch((error)=>{ console.log(error);})
    .finally(()=>{
      this.affiliationService.sendMail(this.firstFormGroup.value).toPromise().then((resp)=>{
        console.log(resp);
      })

      /* this.affiliationService.sendWhatsapp(this.firstFormGroup.value).toPromise().then((resp)=>{
        console.log(resp);
      }) */
    })

    Swal.close()
    this.applicationDone = false
    this.backHome.nativeElement.style.display = 'block'
  }


  goHome(){
    window.location.href = window.location.origin + '/home'
  }
  
  changeStteper(event){
    this.indexStteper.next(event.selectedIndex) /* */
  }

  presentLoader(){
    Swal.fire({
      title: 'Cargando',
      allowOutsideClick: false,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      },
    })
  }

}
