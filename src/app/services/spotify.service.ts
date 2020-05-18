import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) { }
  
  getQuery(query:string){
    let url:string = `https://api.spotify.com/v1/${query}`
    const headers = new HttpHeaders({
      Authorization:'Bearer BQDiX0b6bs6hqFjxIR_WrHHbmJ69pXq3h75NbI2_D3IN-QHi8INPogfM3KF4WNJfD027Nc-eWlEq_Q7tsrw',
    })
    return this.http.get(url,{headers})
  }
  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
    .pipe(map( resp => resp['albums'].items))
  }
  getArtistas(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&market=es&limit=20`)
    .pipe(map( resp => resp['artists'].items))
  }
  getArtista (id:string){
    return this.getQuery(`artists/${id}`)
    .pipe(map( resp => resp))
  }
  getTopTracks (id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=es`)
    .pipe(map( resp => resp['tracks']))
  }
}
