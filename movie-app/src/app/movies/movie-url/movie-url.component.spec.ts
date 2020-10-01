import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieUrlComponent } from './movie-url.component';

describe('MovieUrlComponent', () => {
  let component: MovieUrlComponent;
  let fixture: ComponentFixture<MovieUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
