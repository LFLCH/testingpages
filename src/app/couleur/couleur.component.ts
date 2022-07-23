import { Component, OnInit } from '@angular/core';
import { CouleurService } from './couleur.service';

@Component({
  selector: 'app-couleur',
  templateUrl: './couleur.component.html',
  styleUrls: ['./couleur.component.css']
})
export class CouleurComponent implements OnInit {
  colorsBG!: string[];
  numsBG!: number[]



  constructor(private serviceBG : CouleurService) {
  }

  ngOnInit(): void {
    this.colorsBG = this.serviceBG.getCouleursBG();
    this.numsBG = [...Array(this.colorsBG.length).keys()]
  }
  chgtCouleur(id:number):void{
    this.serviceBG.setCouleurBG(id,this.colorsBG[id])
  }

}
