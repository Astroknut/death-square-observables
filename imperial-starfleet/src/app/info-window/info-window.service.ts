import { Injectable } from '@angular/core';
import { Http }  from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InfoWindowService {

	constructor(private http: Http) { }

	createAPIObservable(turretNumber){
		return this.http.get('http://localhost:3000/api/turret/' + turretNumber)
			.map(response=> response.json().dataBanks);
	}



}
