import { Component } from '@angular/core';
import { article } from 'src/app/shared/models/article';
import { ArticleService } from '../services/article/article.service';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.scss']
})
export class ReadAllComponent {

  articles! : article[]

  constructor(private _articleService : ArticleService){
    this.articles = this._articleService.getAll()
  }

}
