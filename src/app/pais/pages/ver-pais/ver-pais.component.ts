import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor( 
    private activatedRoute: ActivatedRoute,
    private _paisService: PaisService
     ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    // id Viene de params del observable.
      .subscribe( ({id}) => {
        this._paisService.getPaisPorAlpha(id)
          .subscribe(pais => {
            console.log(pais);
          })
      })
  }

}
