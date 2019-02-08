import {Component, OnInit} from '@angular/core';

import {Rezervaribikepark} from '../rezervaribikepark';
import {RezervarebikeparkService} from '../rezervarebikepark.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './rezervarebikeparks.component.html',
  styleUrls: ['./rezervarebikeparks.component.css']
})
export class RezervarebikeparksComponent implements OnInit {
  rezervaribikepark: Rezervaribikepark[];
  bikepark_id = 1;
  biker_id = 1;

  constructor(private rezervariService: RezervarebikeparkService) {
  }

  ngOnInit() {
    this.getRezervari();
  }

  getRezervari(): void {
    this.rezervariService.getRezervari()
      .subscribe(rezervari => this.rezervaribikepark = rezervari);
  }

  addFinal(ziua: string, bikepark_id: number, biker_id: number): void {
    this.bikepark_id = 5;
    this.biker_id = 5;
    bikepark_id = this.bikepark_id;
    biker_id = this.biker_id;
    if (!ziua) {
      return;
    }
    this.rezervariService.addRezervare({ziua, bikepark_id, biker_id} as Rezervaribikepark)
      .subscribe(hero => this.rezervaribikepark.push(hero));
  }

  add(ziua: string, bikepark_id: number, biker_id: number): void {
    if (!ziua) {
      return;
    }
    this.rezervariService.addRezervare({ziua, bikepark_id, biker_id} as Rezervaribikepark)
      .subscribe(hero => this.rezervaribikepark.push(hero));
    /*ziua = ziua.trim();
    if (!ziua) { return; }
    this.rezervariService.addRezervare({ ziua, bikepark_id, biker_id } as Rezervaribikepark)
      .subscribe(hero => {
        this.rezervaribikepark.push(hero);
        window.alert(hero.id);
      });*/
  }

  delete(hero: Rezervaribikepark): void {
    this.rezervaribikepark = this.rezervaribikepark.filter(h => h !== hero);
    this.rezervariService.deleteRezervar(hero).subscribe();
  }

}
