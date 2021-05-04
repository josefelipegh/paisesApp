import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = 'Venezuela';
  hayError: boolean = false;
  paises  : Country[] = [];

  constructor(private _paisService: PaisService) { }

  buscar() {
    this.hayError = false;
    this._paisService.buscarPais(this.termino)
      .subscribe(
        (paises) => {
          this.paises = paises;
        },
        (err) => {
          this.hayError = true;
          this.paises = [];
        });
  }
}
