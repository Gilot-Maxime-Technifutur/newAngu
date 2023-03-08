import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceBannerComponent } from './exercice-banner/exercice-banner.component';
import { ReadAllComponent } from './crud/read-all/read-all.component';
import { ReadOneComponent } from './crud/read-one/read-one.component';
import { CreateComponent } from './crud/create/create.component';
import { UpdateComponent } from './crud/update/update.component';
import { DeleteComponent } from './crud/delete/delete.component';
import { ArticleService } from './crud/services/article/article.service';
import { SearchBarComponent } from './pokemon/search-bar/search-bar.component';
import { ReadPokemonComponent } from './pokemon/read-pokemon/read-pokemon.component';
import { StatsPokemonComponent } from './pokemon/stats-pokemon/stats-pokemon.component';
import { TypesPokemonComponent } from './pokemon/types-pokemon/types-pokemon.component';
import { SharedModule } from 'src/app/shared/module/shared/shared.module';


@NgModule({
  declarations: [
    ExerciceBannerComponent,
    ReadAllComponent,
    ReadOneComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    SearchBarComponent,
    ReadPokemonComponent,
    StatsPokemonComponent,
    TypesPokemonComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ExerciceModule { }
