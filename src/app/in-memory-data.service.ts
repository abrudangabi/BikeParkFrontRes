import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Rezervaribikepark} from './rezervaribikepark';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const rezervaribikepark = [
      { id: 11, ziua: '11-05-2018', bikepark_id: 1, biker_id: 1},
      { id: 12, ziua: '12-05-2018', bikepark_id: 1, biker_id: 1 },
      { id: 13, ziua: '13-05-2018', bikepark_id: 1, biker_id: 1 },
      { id: 14, ziua: '14-05-2018', bikepark_id: 1, biker_id: 1 },
      { id: 15, ziua: '15-05-2018', bikepark_id: 1, biker_id: 1 },
      { id: 16, ziua: '16-05-2018', bikepark_id: 1, biker_id: 1 },
      { id: 17, ziua: '17-05-2018', bikepark_id: 1, biker_id: 1 },
      { id: 18, ziua: '18-05-2018', bikepark_id: 1, biker_id: 1 },
      { id: 19, ziua: '19-05-2018', bikepark_id: 1, biker_id: 1 },
      { id: 20, ziua: '20-05-2018', bikepark_id: 1, biker_id: 1 }
    ];
    return {rezervaribikepark};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(rezervaribikepark: Rezervaribikepark[]): number {
    return rezervaribikepark.length > 0 ? Math.max(...rezervaribikepark.map(hero => hero.id)) + 1 : 11;
  }
}
