import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
})
export class UserlistComponent implements OnInit {

	Datos = [];
	id = 1
  constructor(private http: HttpClient) { }

  ngOnInit() {
  	this.obtenerDatos(20)
  }

  obtenerunPokemones(id){
  	this.http.get<any> (`https://pokeapi.co/api/v2/pokemon/${id}`)
  	.subscribe(res => {
  		this.Datos.push(res);
  	})
  }

  obtenerDatos(num){
  	for (let i = 1; i < num+1; ++i) {
  		this.obtenerunPokemones(i)
  	}
  }

}
