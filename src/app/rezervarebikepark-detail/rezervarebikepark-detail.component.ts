import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {NgModule} from '@angular/core';

import {Rezervaribikepark} from '../rezervaribikepark';
import {RezervarebikeparkService} from '../rezervarebikepark.service';
// import { DatepickerModule } from 'angular-mat-datepicker';

@Component({
  selector: 'app-rezervarebikepark-detail',
  templateUrl: './rezervarebikepark-detail.component.html',
  styleUrls: ['./rezervarebikepark-detail.component.css']
})
export class RezervarebikeparkDetailComponent implements OnInit {
  @Input() rezervare: Rezervaribikepark;

  constructor(
    private route: ActivatedRoute,
    private heroService: RezervarebikeparkService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getRezervare();
  }

  getRezervare(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getRezervare(id)
      .subscribe(hero => this.rezervare = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.rezervare)
      .subscribe(() => this.goBack());
  }

}
