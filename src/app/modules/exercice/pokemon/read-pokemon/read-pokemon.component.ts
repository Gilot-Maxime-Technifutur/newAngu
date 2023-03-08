import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pokemon } from 'src/app/shared/models/pokemon';

@Component({
  selector: 'app-read-pokemon',
  templateUrl: './read-pokemon.component.html',
  styleUrls: ['./read-pokemon.component.scss']
})
export class ReadPokemonComponent {

  monPokemon : pokemon = this._activatedRoute.snapshot.data['monPokemon']

  constructor(private _activatedRoute: ActivatedRoute){}

}
