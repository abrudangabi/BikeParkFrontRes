import { Component, OnInit } from '@angular/core';
import {Rezervaribikepark} from '../rezervaribikepark';
import {RezervarebikeparkService} from '../rezervarebikepark.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  rezervaribikepark: Rezervaribikepark[] = [];

  constructor(private rezervariService: RezervarebikeparkService) { }

  ngOnInit() {
    this.getRezervari();
  }

  getRezervari(): void {
    this.rezervariService.getRezervari()
      .subscribe(heroes => this.rezervaribikepark = heroes.slice(1, 5));
  }

}
