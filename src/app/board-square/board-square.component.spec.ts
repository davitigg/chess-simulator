import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardSquareComponent } from './board-square.component';

describe('BoardSquareComponent', () => {
  let component: BoardSquareComponent;
  let fixture: ComponentFixture<BoardSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardSquareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
