import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { animal } from 'src/app/shared/models/animal';
import { AnimalService } from 'src/app/shared/services/animal/animal.service';

@Component({
  selector: 'app-read-one',
  templateUrl: './read-one.component.html',
  styleUrls: ['./read-one.component.scss']
})
export class ReadOneComponent {

  selectedAnimal! : animal | undefined;

  constructor(private _activatedRoute : ActivatedRoute, private _animalService : AnimalService){

    let id : number = this._activatedRoute.snapshot.params['id']

    this.selectedAnimal = this._animalService.animals.find(a => a.id == id)

  }

}
