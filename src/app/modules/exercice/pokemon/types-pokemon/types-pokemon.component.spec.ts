import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesPokemonComponent } from './types-pokemon.component';

describe('TypesPokemonComponent', () => {
  let component: TypesPokemonComponent;
  let fixture: ComponentFixture<TypesPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
