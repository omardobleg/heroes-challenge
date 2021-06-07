import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';
import { from, Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Hero, FilterSearch } from '@heroes/data'

@Injectable({
  providedIn: 'root',
})
export class PouchDBService {
  private pouchDB: PouchDB.Database<Hero>;
  constructor() {
    PouchDB.plugin(PouchDBFind);
    this.pouchDB = new PouchDB('heroes');
  }

  find({ name, alias, quirk, occupation, affiliation }: FilterSearch) {
    return from(
      this.pouchDB.find({
        selector: {
          ...(name && { name: { $regex: RegExp(name, 'i') } }),
          ...(alias && { alias: { $regex: RegExp(alias, 'i') } }),
          ...(quirk && { quirk: { $regex: RegExp(quirk, 'i') } }),
          ...(occupation && {
            occupation: { $regex: RegExp(occupation, 'i') },
          }),
          ...(affiliation && {
            affiliation: { $regex: RegExp(affiliation, 'i') },
          }),
        },
      })
    );
  }

  getOne(id: string) {
    return this.pouchDB.get(id);
  }

  upsertOne(hero: Hero) {
    return this.safeQuery(hero).pipe(
      switchMap((val) => from(this.pouchDB.put(val)))
    );
  }

  deleteOne(hero: Hero) {
    return this.safeQuery(hero).pipe(
      switchMap((val) => from(this.pouchDB.put({ ...val, deleted: true })))
    );
  }

  private safeQuery(hero: Hero): Observable<PouchDB.Core.PutDocument<Hero>> {
    return from(this.pouchDB.get(hero.id)).pipe(
      catchError(() => of(null)),
      map((prevDoc) => {
        return   {
          ...(prevDoc && { _rev: prevDoc._rev }),
          ...hero,
          _id: hero.id || hero.name,
        };
      })
    );
  }
}
