import { Component, Input } from '@angular/core';
import { Stat } from 'src/app/shared/models/pokemon';

@Component({
  selector: 'app-stats-pokemon',
  templateUrl: './stats-pokemon.component.html',
  styleUrls: ['./stats-pokemon.component.scss']
})
export class StatsPokemonComponent {

  @Input() stats! : Stat[]

}
