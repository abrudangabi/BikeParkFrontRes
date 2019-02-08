import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import {Rezervaribikepark} from '../rezervaribikepark';
import {RezervarebikeparkService} from '../rezervarebikepark.service';

@Component({
  selector: 'app-rezervarebikepark-search',
  templateUrl: './rezervarebikepark-search.component.html',
  styleUrls: ['./rezervarebikepark-search.component.css']
})
export class RezervarebikeparkSearchComponent implements OnInit {
  rezervaribikepark$: Observable<Rezervaribikepark[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: RezervarebikeparkService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.rezervaribikepark$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

}
