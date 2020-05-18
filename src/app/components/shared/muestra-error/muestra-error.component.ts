import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-muestra-error',
  templateUrl: './muestra-error.component.html'
})
export class MuestraErrorComponent implements OnInit {
  @Input() mensajeError:string

  constructor() { }

  ngOnInit(): void {
  }

}
