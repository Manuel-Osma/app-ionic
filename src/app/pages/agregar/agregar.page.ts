import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { ListaItem } from 'src/app/models/lista-item.models';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage {
  lista: Lista;
  nombreItem = '';
  constructor(
    private deseosService: DeseosService,
    private router: ActivatedRoute
  ) {
    const listaId = this.router.snapshot.paramMap.get('listaId');

    this.lista = this.deseosService.obtenerLista(listaId);
  }

  agregarItem() {
    if (this.nombreItem.length === 0) {
      return;
    }
    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.nombreItem = '';
    this.deseosService.guardarStorage();
  }

  cambioCheck(item: ListaItem) {
    const pedientes = this.lista.items.filter(
      (itemData) => !itemData.estado
    ).length;
    console.log({ pedientes });

    if (pedientes === 0) {
      this.lista.terminadaEn = new Date();
      this.lista.completada = true;
    } else {
      this.lista.terminadaEn = null;
      this.lista.completada = false;
    }

    this.deseosService.guardarStorage();
  }
  borrar(i: number){
    this.lista.items.splice(i,1);
    this.deseosService.guardarStorage();
  }
}
