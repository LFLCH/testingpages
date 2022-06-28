import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  search ="";

  constructor() { }

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
}
