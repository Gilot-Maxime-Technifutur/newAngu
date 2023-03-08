import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { DemoRoutingModule } from './demo-routing.module';
import { DemoBannerComponent } from './demo-banner/demo-banner.component';
import { ReadAllComponent } from './demo1/read-all/read-all.component';
import { ReadOneComponent } from './demo1/read-one/read-one.component';
import { AnimalService } from 'src/app/shared/services/animal/animal.service';
import { SubjectComponent } from './subject/subject.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { StatsPokemonComponent } from './stats-pokemon/stats-pokemon.component';


@NgModule({
  declarations: [
    DemoBannerComponent,
    ReadAllComponent,
    ReadOneComponent,
    SubjectComponent,
    HttpClientComponent,
    StatsPokemonComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule
  ],
  providers : [AnimalService]
})
export class DemoModule { }
