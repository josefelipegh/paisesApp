import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino:string = 'Hola mundo';

  constructor( private _paisService: PaisService ) { }

  buscar(){
   this._paisService.buscarPais(this.termino)
    .subscribe( response => console.log(response));
  }
}
