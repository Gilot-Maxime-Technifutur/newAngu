import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPokemonComponent } from './read-pokemon.component';

describe('ReadPokemonComponent', () => {
  let component: ReadPokemonComponent;
  let fixture: ComponentFixture<ReadPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
