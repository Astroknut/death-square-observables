import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute }   from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { InfoWindowService } from './info-window.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.css']
})
export class InfoWindowComponent implements OnInit {

	apiObservable;
  targetSubject = new Subject();

  constructor(
  	private http: Http,
  	private route: ActivatedRoute,
    private infoWindowService: InfoWindowService
  ) { }

  ngOnInit() {
    this.apiObservable = this.targetSubject
        .switchMap(turretNumber=> this.infoWindowService.createAPIObservable(turretNumber));
  	this.route.params.forEach( param => {
  		this.findTurret(param.id);
  	});
  }

  findTurret(turretNumber){
    this.targetSubject.next(turretNumber);
    
	}

}
