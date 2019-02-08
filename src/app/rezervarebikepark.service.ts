import { Injectable } from '@angular/core';

import {Observable, of} from 'rxjs';

import {Rezervaribikepark} from './rezervaribikepark';
import {RezervarebikeparksComponent} from './rezervarebikeparks/rezervarebikeparks.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RezervarebikeparkService {

  constructor(
    private http: HttpClient) {
  }

  private heroesUrl = 'api/rezervaribikepark';  // URL to web api

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** GET heroes from the server */
  getRezervari (): Observable<Rezervaribikepark[]> {
    return this.http.get<Rezervaribikepark[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError('getRezervari', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getRezervare(rezervarebikepark_id: number): Observable<Rezervaribikepark> {
    const url = `${this.heroesUrl}/${rezervarebikepark_id}`;
    return this.http.get<Rezervaribikepark>(url).pipe(
      catchError(this.handleError<Rezervaribikepark>(`getRezervare rezervarebikepark_id=${rezervarebikepark_id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateHero (hero: Rezervaribikepark): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** POST: add a new hero to the server */
  addRezervare (hero: Rezervaribikepark): Observable<Rezervaribikepark> {
    /*hero.rezervarebikepark_id = 22;*/
    window.alert('Se duce ');
    window.alert(hero.ziua);
    /*url = 'http://localhost:8080//api/rezervaribikepark/rezerva';
    $http({
      method: 'POST',
      url: url,
      data: JSON.stringify(hero)
    })
      .then(function (success) {
        callback(success);
      }, function (error) {
        errorCallback(error.data);
      });*/
    return this.http.post<Rezervaribikepark>(this.heroesUrl, hero, httpOptions)
      .pipe(
        catchError(this.handleError('addHero', hero))
      );
    /*window.alert(hero.id);
    return this.http.post<Rezervaribikepark>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Rezervaribikepark) => this.log(`added hero w/ rezervarebikepark_id=${hero.id}`)),
      catchError(this.handleError<Rezervaribikepark>('addRezervare'))
    );*/
  }

  /** DELETE: delete the hero from the server */
  deleteRezervar (hero: Rezervaribikepark | number): Observable<Rezervaribikepark> {
    const id = typeof hero === 'number' ? hero : hero.id;
    console.log(id);
    window.alert(id);
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Rezervaribikepark>(url, httpOptions).pipe(
      catchError(this.handleError<Rezervaribikepark>('deleteHero'))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Rezervaribikepark[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Rezervaribikepark[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      catchError(this.handleError<Rezervaribikepark[]>('searchHeroes', []))
    );
  }
}
