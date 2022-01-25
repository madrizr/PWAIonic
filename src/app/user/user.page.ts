import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

	user: string;
	pokemon: any;

  constructor(private ar: ActivatedRoute,
  				private _servicehttp: PeticionesService) { }

  ngOnInit() {
  	
  	this.user = this.ar.snapshot.paramMap.get('id');
  	this._servicehttp.getUser(this.user).subscribe(res => this.pokemon = res);
  }


}
