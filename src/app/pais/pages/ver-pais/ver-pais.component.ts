import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!:Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _paisService: PaisService
  ) { }

  ngOnInit(): void {
    // id Viene de params del observable. switchMap es un operador que recibe params, porque lo infiere, y debe retornar un observable.
    // Con esto logramos que con el pipe y el operador switchMap retornemos el observable que necesitamos subcribirnos.
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this._paisService.getPaisPorAlpha(id)),
        tap( console.log )
      )
      .subscribe(pais => {
        this.pais = pais;
      });


    // this.activatedRoute.params
    // // id Viene de params del observable.
    //   .subscribe( ({id}) => {
    //     this._paisService.getPaisPorAlpha(id)
    //       .subscribe(pais => {
    //         console.log(pais);
    //       })
    //   });
  }

}
