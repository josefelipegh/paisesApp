import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter     : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce  : EventEmitter<string> = new EventEmitter();
  
  @Input()  placeholder : string = '';
  
  // Observable de tipo subject
  debouncer: Subject<string> = new Subject();

  termino:string = '';


  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe( value => {
        this.onDebounce.emit( value );
      });
  }

  buscar(){
    this.onEnter.emit( this.termino );
  }

  teclaPresionada( event:any){

    this.debouncer.next( this.termino );

  }
}
