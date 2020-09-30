import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFeatureComponent } from './movie-feature.component';

describe('MovieFeatureComponent', () => {
  let component: MovieFeatureComponent;
  let fixture: ComponentFixture<MovieFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
