import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

	user: string;
	pokemon: any;

  constructor(private ar: ActivatedRoute,
  				private http: HttpClient) { }

  ngOnInit() {
  	
  	this.user = this.ar.snapshot.paramMap.get('id');
  	this.http.get(`https://pokeapi.co/api/v2/pokemon/` +this.user)
  	.subscribe(res => this.pokemon = res);
  }


}
