import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsPokemonComponent } from './stats-pokemon.component';

describe('StatsPokemonComponent', () => {
  let component: StatsPokemonComponent;
  let fixture: ComponentFixture<StatsPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
