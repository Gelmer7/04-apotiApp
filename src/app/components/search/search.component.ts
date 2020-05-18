import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  artistas:any[]=[]
  carregado:boolean =true
  mensajeError:string
  error=false
  constructor( private spotifyService:SpotifyService) { }

  ngOnInit(): void {
  }
  buscar(termino:string){
    this.carregado =false
    this.spotifyService.getArtistas(termino)
    .subscribe((resp:any)=>{
      this.artistas = resp
      this.carregado = true
    },(erro =>{
      this.carregado = false
      this.error = true
      this.mensajeError = erro.error.error.message
    }))
  }

}
