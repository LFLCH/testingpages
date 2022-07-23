import { Component, OnInit } from '@angular/core';
import { CouleurService } from '../couleur/couleur.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  search ="";
  couleurBouton = 'navy'

  constructor(private colorService : CouleurService) {

  }

  ngOnInit(): void {
  }
  public rechercher(){
    window.open(
      this.recherche(),
      '_blank'
    );
  }

  public recherche():string{
    return "https://www.google.com/search?q="+this.search;
  }
  selection():void{
    this.couleurBouton = this.colorService.getCouleursBG()[1]
  }
}
