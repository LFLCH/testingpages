import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CouleurService {

  private couleursBG = ['navy','springgreen']
  private coefs : number[]= [60,60]


  constructor() { }

  public getCouleursBG(){
    return this.couleursBG
  }

  public setCouleurBG(indice : number,couleur : string){
    this.couleursBG[indice] = couleur;
    this.updateBG()
  }

  private setCouleursBG(couleurs:string[]){
    for(let i=0;i<this.couleursBG.length;i++){this.setCouleurBG(i,this.couleursBG[i])}
  }

  private updateBG(){
    let valeurs  = "110deg, "
    for(let i=0;i<this.couleursBG.length;i++){
      valeurs +=this.couleursBG[i]+" "+this.coefs[i].toString()+"%"
      if(i<this.couleursBG.length-1)valeurs+=','
    }
    document.body.setAttribute('style','background:linear-gradient('+valeurs+')') ;
    localStorage.setItem("colorBG",this.couleursBG.toString())
  }

  public refreshBG(){
    let c  =localStorage.getItem("colorBG")
    if(c!=null){
      this.couleursBG = c.split(",")
    }
    this.setCouleursBG(this.couleursBG)

  }
}
