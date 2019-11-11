import { ModalPage } from './../modal/modal.page';
import { DataService } from './../service/data.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import *  as  menu from '../home/assets/data/menu.json';
import { JsonPipe } from '@angular/common';
import { testUserAgent } from '@ionic/core/dist/types/utils/platform';
import { async } from 'q';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})

export class HomePage implements OnInit {


  @ViewChild('slides', { static: false }) slides: IonSlides;

  componetes: Component[] = [];



  constructor(private dataService: DataService, private ModalCtrl: ModalController, public toastCrtl: ToastController, public alertController: AlertController) { }
  components: Observable<Component[]>/* Busca Json */
  public metodos: string; /* Switch metodo A e B */
  public sectMetodo: any; /* atribui a esta variavel Min e max da Pena*/
  public crimeSelecionado; /* variavel que recebe o valor do crime selecionado  do json*/

  public circunstancia: any;
  leis: any;

  /*  */
  public multiInsidencia: any; /* multirreincidência selecao */
  public multiInsidencia2: any;
  /*  */

  public penaBaseResultado: any; /* Resultado do calculo da primeira fase */

  /*  */

  public agravantes: any; /* Agravantes Sim/nao */
  public agravaneteQtd: any; /* Quantidade de agravantes */
  /*  */

  /*  */
  public atenuantes: any; /* Atenuantes Sim/nao */
  public atenuantesQTD: any; /* Atenuantes  */
  /*  */

  public causaAumento;/*Causa aumento switch*/
  public aumentoPena: any;

  public causaDiminuicao; /* Causa Diminuicao switch*/
  public diminuiPena: any;
  public crime: any;


  /* array crimes async */
  ngOnInit() {
    this.components = this.dataService.getcrimes();
    this.leis = menu;
  }

  crimes() {
    console.log("Crime com Objeto" + JSON.stringify(this.crime));
  }



  async proximoSlide() {
    if (this.metodos == undefined) {
      const alert = await this.alertController.create({
        header: 'Aviso',
        subHeader: 'Falta de argumento',
        message: 'Selecione um metodo para proceguir!!',
        buttons: ['OK']
      });
      await alert.present();
    } else if (this.crime == undefined) {
      const alert = await this.alertController.create({
        header: 'Aviso',
        subHeader: 'Falta de argumento',
        message: 'Selecione um crime e um metodo para proceguir!!',
        buttons: ['OK']
      });
      await alert.present();


    } else
      this.slides.slideNext();
  }


  /* Selecao do metodo A e B falta pegar min no Json */
  async selectMetodo() {
    if (this.crime == undefined) {
      const alert = await this.alertController.create({
        header: 'Aviso',
        subHeader: 'Falta de argumento',
        message: 'Selecione um crime!!',
        buttons: ['OK']
      });
      await alert.present();
    }
    else {
      if (this.metodos == "metodoA") {
        console.log("metodoA " + JSON.stringify(this.crime.min));
      }
      else if (this.metodos == "metodoB") {
        console.log("metodoB " + JSON.stringify(this.crime.max - this.crime.min));

      }
    }
  }

  async showModal() {
    const modal = await this.ModalCtrl.create({
      component: ModalPage
    });
    modal.onDidDismiss

    modal.present();
  }


  
  /* Pena Base */
  calculoPenaBase() {
    //this.penaBaseResultado = this.crime.min;
    this.penaBaseResultado = new Date(this.crime.max);

  }
  /* Fim da Pena Base */

  /*  MultiInsidencia funcicao */
  multiInsidenciaFunc() {
    console.log("Tese multi " + this.multiInsidencia2);
  }
  /* agravante */
  agravante() {
    console.log("teste agravante");
    console.log("teste agravante" + this.agravaneteQtd);
  }

  /* Atenuante */
  atenuante() {
    console.log("teste atenuante");
    console.log("teste atenuante " + this.atenuantesQTD);
  }






  /* Causa de aumento */
  causaAumentoFunc() {
    console.log("teste causa Aumento");
    console.log("Diminuicao de pena em " + this.aumentoPena);
  }


  causaDiminuicaoFunc() {
    console.log("teste causa diminuicao");
    console.log("Diminuicao de pena em " + this.diminuiPena);
  }

}
















