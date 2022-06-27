import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.component.html',
  styleUrls: ['./bienvenue.component.css']
})
export class BienvenueComponent implements OnInit {

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
