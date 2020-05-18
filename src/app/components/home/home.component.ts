import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  albums:any[] =[]
  carregado = false
  mensajeError:string
  error:boolean = false
  constructor( private spotifyServices:SpotifyService ) { 
    
  this.spotifyServices.getNewReleases()
    .subscribe((resp:any) =>{
      this.albums = resp
      console.log(this.albums)
      this.carregado = true
    },(errorServicio =>{
      this.carregado = false
      this.error = true
      this.mensajeError = errorServicio.error.error.message
    }))
  }

  ngOnInit(): void {

  }

}
