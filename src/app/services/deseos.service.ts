import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {
    const lista1 = new Lista('recolectar piedras del infinito');
    const lista2 = new Lista('Desaparecer Heroes');

    this.listas.push(lista1,lista2);
    this.cargarStorage();
   }


   crearLista( titulo: string){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);

    return nuevaLista.id;

   }

   obtenerLista(id: string | number){
    id = Number(id);
    return this.listas.find( listaData => listaData.id === id);
   }
   guardarStorage(){
    localStorage.setItem('data', JSON.stringify(this.listas) );

   }
   cargarStorage() {

    if ( localStorage.getItem('data') ) {
      this.listas = JSON.parse( localStorage.getItem('data') );
    } else {
      this.listas = [];
    }


  }
  borrarLista(lista: Lista){
    this.listas = this.listas.filter( listData => listData.id !== lista.id );
    this.guardarStorage();
  }
}
