import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { article } from 'src/app/shared/models/article';
import { ArticleService } from '../services/article/article.service';

@Component({
  selector: 'app-read-one',
  templateUrl: './read-one.component.html',
  styleUrls: ['./read-one.component.scss']
})
export class ReadOneComponent {

  article! : article | undefined;

  constructor(private _articleService : ArticleService, private _activatedRoute : ActivatedRoute){
    this.article = this._articleService.getById(this._activatedRoute.snapshot.params['id'])
  }

}
