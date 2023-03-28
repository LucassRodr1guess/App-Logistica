import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ENETRESET } from 'constants';
import { parse } from 'path';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  ft: string = '';
  pp: string = '';
  distancia: string = '';
  qdtp: string = '';
  precof: number = 0;

  constructor(public botao: ToastController) {}

  verificarRadio() {
  
    if (this.distancia <= '25') {

    
      if (this.qdtp <= '5') {

      
        if (this.ft === 'regular') {
          this.precof = (((parseFloat(this.pp) + 0.05) + (parseFloat(this.distancia) * 0.05))  ) + 15;
        }
        else if (this.ft === 'expresso') {
          this.precof = (((parseFloat(this.pp) + 0.06) + (parseFloat(this.distancia) * 0.06))  )+ 15 ;
        }
        else {
          this.precof = (((parseFloat(this.pp) + 0.08) + (parseFloat(this.distancia) * 0.08)) )+ 15;
        }
      }

      else {
        if (this.ft === 'regular') {
          this.precof = (((parseFloat(this.pp) + 0.05) + (parseFloat(this.distancia)) * 0.05) + 15 )* 0.9 ;
        }
        else if (this.ft === 'expresso') {
          this.precof = (((parseFloat(this.pp) + 0.06) + (parseFloat(this.distancia)) * 0.06) + 15 )* 0.9;
        }
        else {
          this.precof = (((parseFloat(this.pp) + 0.08) + (parseFloat(this.distancia)) * 0.08) + 15)* 0.9 ;
        }
      }
    }

    else {
      
      if (this.qdtp >= '6') {

       
        if (this.ft === 'regular') {
          this.precof = (((parseFloat(this.pp) + 0.05) + (parseFloat(this.distancia) * 0.05))+15 )* 0.9;
        }
        else if (this.ft === 'expresso') {
          this.precof = (((parseFloat(this.pp) + 0.06) + (parseFloat(this.distancia) * 0.06))+15 )* 0.9;
        }
        else {
          this.precof = (((parseFloat(this.pp) + 0.08) + (parseFloat(this.distancia) * 0.08)+15) )* 0.9;
        }
      }

      else {
        if (this.ft === 'regular') {
          this.precof = (parseFloat(this.pp) + 0.05) + (parseFloat(this.distancia) * 0.05) + 15;
        }
        else if (this.ft === 'expresso') {
          this.precof = (parseFloat(this.pp) + 0.06) + (parseFloat(this.distancia) * 0.06)+ 15;
        }
        else {
          this.precof = (parseFloat(this.pp) + 0.08) + (parseFloat(this.distancia) * 0.08)+ 15;
        }
      }
    }

   
  }
  


}


