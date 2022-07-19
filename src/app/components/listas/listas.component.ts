import { Component, Input } from '@angular/core';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent  {

  @Input() terminados = true;
  constructor(public deseosService: DeseosService , private router: Router) { }


  listaSelecionada(lista: Lista){

    if(this.terminados){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    }else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
    console.log(lista);
  }

  borrarLista(lista: Lista){
  this.deseosService.borrarLista(lista);
  }

}
