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
      Authorization:'Bearer BQC0-CSJgCJa_HmroE9EerB-l2XN-oLbUl-Fv-1WnaO6CBb_kud6G4wpvPrCRJWIEDflNaBfY9_IJMU8fyI',
    })
    return this.http.get(url,{headers})
  }
  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
    .pipe(map( resp => resp['albums'].items))
  }
  getArtista(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&market=es&limit=20`)
    .pipe(map( resp => resp['artists'].items))

  }
}
