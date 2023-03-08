import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { pokemon } from '../../models/pokemon';
import { PokeService } from '../../services/poke/poke.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonResolver implements Resolve<pokemon> {

  constructor(private _activatedRoute: ActivatedRoute, private _pokeService : PokeService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<pokemon> {

    console.log(this._activatedRoute.snapshot.paramMap.get('id'));

    return this._pokeService.getPokemonById(this._activatedRoute.snapshot.params['id'])
  }
}
