import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent implements OnInit {

  @Input() items:any[]=[]

  constructor( private route:Router) { }

  ngOnInit(): void {
  }
  verItem(item:any){
    let idArtista:any
    if (item.type == "artist") {
      idArtista = item.id
    }
    if (item.type == "album") {
      idArtista = item.artists[0].id
    }
  this.route.navigate(['/artista', idArtista])
  }
}
