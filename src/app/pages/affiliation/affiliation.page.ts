import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-affiliation',
  templateUrl: './affiliation.page.html',
  styleUrls: ['./affiliation.page.scss'],
})
export class AffiliationPage implements OnInit {

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

  options: string[] = ['Total de 1 usuario conectado por tan solo $1.490.', 'Total de 2 usuarios conectados  simultáneamente por $2.490.', 'Total de 3 usuarios conectados simultáneamente por $3.790.',];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {

    /* Aqui escuchamos lo que emite el observable */
    this.indexStteperObs.subscribe((res) => {
      console.log('Desde Stepper Observable',res)
      this.indexStep = res 
    }) 
    /* Aqui escuchamos lo que emite el observable */


    this.firstFormGroup = new FormGroup({
      name:new FormControl( '', Validators.required),
      lastname:new FormControl( '', Validators.required),
      rut:new FormControl( '', [Validators.required,Validators.minLength(8)]),
      email:new FormControl( '', [Validators.required,Validators.email]),
      phone:new FormControl( '', Validators.required),
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

  sendApplication(){
    console.log(this.secondFormGroup.value);
    this.applicationDone = false
    this.backHome.nativeElement.style.display = 'block'
  }

  goHome(){
    window.location.href = window.location.origin + '/home'
  }


  changeStteper(event){
    this.indexStteper.next(event.selectedIndex) /* */
  }

}
