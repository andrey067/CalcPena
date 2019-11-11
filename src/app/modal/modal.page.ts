import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private ModalCtrl: ModalController) { }

  ngOnInit() {
  }

  culpabilidade: any;
  antecedentes: any
  condutaSocial: any;
  personalidadeAgente: any;
  motivoCrime: any;
  circunstanciaCrime: any;
  consequenciaCrime: any;
  comportamentoVitima: any;
  public result: any;


  /* metodo asyncrono */
  circunstanciaFunc() {
    this.result = 0;
    if (this.culpabilidade == true) {
      console.log("culpabilidade marcado");
      this.result = this.result + this.culpabilidade;
    }
    if (this.antecedentes == true) {
      console.log("antecedentes marcado");
      this.result = this.result + this.antecedentes;
    }
    if (this.condutaSocial == true) {
      this.result = this.result + this.condutaSocial;
      console.log("condutaSocial marcado");
    }
    if (this.personalidadeAgente == true) {
      this.result = this.result + this.personalidadeAgente;
      console.log("personalidadeAgente marcado");
    }
    if (this.motivoCrime == true) {
      this.result = this.result + this.motivoCrime;
      console.log("personalidadeAgente marcado");
    }
    if (this.circunstanciaCrime == true) {
      this.result = this.result + this.circunstanciaCrime;
      console.log("circunstanciaCrime marcado");
    }
    if (this.consequenciaCrime == true) {
      this.result = this.result + this.consequenciaCrime;
      console.log("consequenciaCrime marcado");
    }
    if (this.comportamentoVitima == true) {
      this.result = this.result + this.comportamentoVitima;
      console.log("comportamentoVitima marcado");
    }

  }
  closeModal() {
    this.ModalCtrl.dismiss();
  }


}
