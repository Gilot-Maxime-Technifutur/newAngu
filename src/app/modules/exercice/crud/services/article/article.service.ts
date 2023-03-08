import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { article } from 'src/app/shared/models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articles : article[] = [{
    id : 1,
    name : 'Bitcoin',
    price : 35000,
    creationDate : new Date(),
    cat : 'Monnaie virtuelle',
    desc : 'c cher',
    note : 2
  }]

  private cpt! : number;

  constructor(private _router : Router) {

    this.cpt = this.articles.length + 1

   }

  getById(id : number) : article | undefined{
    return this.articles.find(a => a.id == id)
  }

  getAll() : article[]{
    return this.articles
  }

  create(newArticle : article) : void{
    newArticle.id = this.cpt
    newArticle.creationDate = new Date()
    this.cpt++
    this.articles.push(newArticle)

    this._router.navigate(['exercice/crud/all'])
  }

  update(updatedArticle : article){
    this.articles[this.articles.findIndex(a => a.id == updatedArticle.id)] = updatedArticle
    this._router.navigate(['exercice/crud/all'])
  }

  delete(id : number){
    this.articles.splice(this.articles.findIndex(a => a.id == id), 1)
    this._router.navigate(['exercice/crud/all'])
  }

}
