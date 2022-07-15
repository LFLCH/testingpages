import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { InfouserComponent } from '../infouser/infouser.component';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.component.html',
  styleUrls: ['./bienvenue.component.css']
})
export class BienvenueComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  infoUser() {
    this.dialog.open(InfouserComponent,{
      width : 'max-content',
      enterAnimationDuration : '1000ms',
      exitAnimationDuration : '1000ms',
    });
  }

  ngOnInit(): void {
  }


}

