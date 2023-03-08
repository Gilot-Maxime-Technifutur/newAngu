import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { article } from 'src/app/shared/models/article';
import { ArticleService } from '../services/article/article.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {

  article! : article | undefined

  updateForm! : FormGroup

  constructor(private _formBuilder : FormBuilder,
    private _articleService : ArticleService,
    private _activatedRoute : ActivatedRoute){

    this.article = this._articleService.getById(this._activatedRoute.snapshot.params['id'])

    this.updateForm = this._formBuilder.group({
      name : [this.article?.name, [Validators.required]],
      cat : [this.article?.cat, [Validators.required]],
      price : [this.article?.price, [Validators.required, Validators.min(0)]],
      desc : [this.article?.desc, [Validators.required]],
      note : [this.article?.note, [Validators.required, Validators.min(0), Validators.max(5)]]
    })



  }

  submit(){

    let updatedArticle : article = this.updateForm.value
    if (this.article) {
      updatedArticle.id = this.article.id
      updatedArticle.creationDate = this.article.creationDate

      this._articleService.update(updatedArticle)
    }


  }



}
