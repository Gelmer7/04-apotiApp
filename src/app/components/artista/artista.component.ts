import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {
  idArtista:string
  artista: any
  carregado=false
  tracks:any[] =[]
  constructor(  private activatedRoute:ActivatedRoute,
                private spotifyService:SpotifyService) { 
    this.activatedRoute.params.subscribe(res =>{
      this.idArtista = res.id
      this.spotifyService.getArtista(this.idArtista)
        .subscribe(res=>{
          this.artista = res
          console.log(this.artista);
          this.carregado = true
        })
    })

    this.spotifyService.getTopTracks(this.idArtista)
    .subscribe((res:any[])=>{
      this.tracks = res
      console.log(this.tracks);
    })
  }

  ngOnInit(): void {
  }

}
