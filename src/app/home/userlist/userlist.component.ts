import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
})
export class UserlistComponent implements OnInit {

	Datos = [];
	id = 1
  constructor(private _servicehttp: PeticionesService) { }

  ngOnInit() {
  	this.obtenerDatos(20)
  }

  obtenerunPokemones(id){
  	this._servicehttp.getxId(id).subscribe(res => this.Datos.push(res))
  }

  obtenerDatos(num){
  	for (let i = 1; i < num+1; ++i) {
      this.obtenerunPokemones(i);
    }
  }

}
