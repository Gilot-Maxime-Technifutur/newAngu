import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  constructor(private _router : Router){}

  selectedPokemon : number = 1

  search(){
    console.log(this.selectedPokemon);
    this._router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
      }
       this._router.onSameUrlNavigation = 'reload';
      this._router.navigateByUrl("/exercice/pokemon/" + this.selectedPokemon)
  }

}
