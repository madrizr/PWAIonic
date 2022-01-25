import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

	private url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  public getUser(user): Observable<any>{
  	return this.http.get(this.url +user)
  }

  public getxId(id): Observable<any>{
  	return this.http.get(this.url +id)
  }
}
