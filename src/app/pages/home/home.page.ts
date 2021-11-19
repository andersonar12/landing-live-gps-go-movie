import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription, Observable, fromEvent } from 'rxjs';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /* Para escuchar cuando cambia el width de la pantalla */
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription

  public col:number

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.onResize()
  }

  openDialog(source?): void {

    let options = {}

    if(window.innerWidth < 620){
      options['maxWidth'] = '100vw'
      options['width'] = '100%'
    } else {
      options['width'] = '650px'
    }

    const dialogRef = this.dialog.open(ModalComponent, {
      ...options,
      data: { source }
    });
  }

  onResize(){

    if(window.innerWidth <= 1366){
      this.col = 11
    }

    if(window.innerWidth >= 1367){
      this.col = 7
    }

    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( (evt:any) => {

      /* console.log(evt.target.innerWidth); */

        if(evt.target.innerWidth <= 1366){
          this.col = 11
        }

        if(evt.target.innerWidth >= 1367){
          this.col = 7
        }
  
    })

 


  }

  ngOnDestroy(){
    if (this.resizeSubscription$) {
      this.resizeSubscription$.unsubscribe()
    }
  }
}
