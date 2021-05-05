import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent implements OnInit {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActive: string = '';

  hayError: boolean = false;
  paises  : Country[] = [];

  constructor( private _countryServices: PaisService ) { }

  getClaseCSS(region:string):string{
    return (region === this.regionActive) 
              ? 'btn btn-primary' 
              : 'btn btn-outline-primary';
  }

  ngOnInit(): void {
  }

  activateRegion( region: string ){
    this.regionActive = region;
    this.hayError = false;
    this._countryServices.buscarRegion(region)
        .subscribe(paises => {
          this.paises = paises;
        },
        (err) => {
          this.hayError = true;
          this.paises = [];
        });
  }

}
