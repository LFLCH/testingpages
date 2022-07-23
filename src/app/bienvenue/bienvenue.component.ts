import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { InfouserComponent } from '../infouser/infouser.component';
import { faCloudSun, faLocationDot, faPalette } from '@fortawesome/free-solid-svg-icons';
import { CouleurComponent } from '../couleur/couleur.component';
import { CouleurService } from '../couleur/couleur.service';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.component.html',
  styleUrls: ['./bienvenue.component.css']
})
export class BienvenueComponent implements OnInit {
  meteoIcon = faCloudSun;
  locationIcon = faLocationDot
  colorIcon = faPalette
  popup_properties = {
    width : 'max-content',
    enterAnimationDuration : '1000ms',
    exitAnimationDuration : '1000ms',
  }

  constructor(public dialog: MatDialog, private couleurService : CouleurService) {
    couleurService.refreshBG()
  }

  infoUser() {
    this.dialog.open(InfouserComponent,this.popup_properties);
  }

  couleur(){
    this.dialog.open(CouleurComponent,this.popup_properties)
  }


  ngOnInit(): void {
  }


}

