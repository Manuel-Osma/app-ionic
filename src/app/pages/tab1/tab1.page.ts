import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
    constructor(
    public deseosService: DeseosService,
    private router: Router,
    private alertCtr: AlertController
  ) {}

  async agregarLista() {
    const alert = await this.alertCtr.create({
      header: 'Nueva Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'nombre de la lista',
        },
      ],
      buttons:[
        {
          text:'Cancelar',
          role:'cancel',
          handler: () => {
            console.log('cancelar');
          }
        },
        {
          text:'Crear',
          handler(data) {
            console.log(data);
            if(data.titulo.length === 0){
              return;
            }
            this.router.navigateByUrl('/tabs/tab1/agregar');

          }
        }
      ]
    });
    alert.present();
  }

}
