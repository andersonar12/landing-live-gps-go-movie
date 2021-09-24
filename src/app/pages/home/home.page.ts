import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {

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
}
