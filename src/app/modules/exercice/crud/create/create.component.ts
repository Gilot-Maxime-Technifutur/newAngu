import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../services/article/article.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  createForm : FormGroup = this._formBuilder.group({
    name : ['', [Validators.required]],
    cat : ['', [Validators.required]],
    price : [0, [Validators.required, Validators.min(0)]],
    desc : ['', [Validators.required]],
    note : [5, [Validators.required, Validators.min(0), Validators.max(5)]]
  })

  constructor(private _articleService : ArticleService, private _formBuilder : FormBuilder){}

  submit(){
    this._articleService.create(this.createForm.value)

  }


}
