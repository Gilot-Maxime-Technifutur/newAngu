import { Injectable } from '@angular/core';
import { animal } from '../../models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  animals : animal[] = [
    {
      id : 1,
      name : 'Poupoune',
      birthdate : new Date("08/16/2015"),
      race : "Bichon Argentin",
      coat : 'Bleu marine',
      owner : "Gislaine"
    },
    {
      id : 2,
      name : 'Grisouille',
      birthdate : new Date("04/11/2020"),
      race : "Frison",
      coat : 'Noir',
      owner : "Nicolas"
    },
    {
      id : 3,
      name : 'Skye',
      birthdate : new Date("01/03/2020"),
      race : "Levrier Whippet",
      coat : 'Beige',
      owner : "Gavin"
    },
    {
      id : 4,
      name : 'Sushi',
      birthdate : new Date("05/03/2020"),
      race : "Chat",
      coat : 'Noir',
      owner : "Charlotte"
    },
    {
      id : 5,
      name : 'Roberto',
      birthdate : new Date("05/11/2007"),
      race : "Chat Europeen",
      coat : 'Grise',
      owner : "Benjamin"
    }
  ]

  constructor() { }
}
