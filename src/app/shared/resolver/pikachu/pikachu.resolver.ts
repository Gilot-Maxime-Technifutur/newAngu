import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, Observable, of, map } from 'rxjs';
import { pokemon } from '../../models/pokemon';
import { PokeService } from '../../services/poke/poke.service';
import { errorModel } from '../../models/errorModel'

@Injectable({
  providedIn: 'root'
})
export class PikachuResolver implements Resolve<pokemon | any> {

  constructor(private _pokeService : PokeService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<pokemon | any> {
    return this._pokeService.getPikachu().pipe(catchError(err => {return of({error : err})}))}

}
