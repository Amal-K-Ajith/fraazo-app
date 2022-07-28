import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FritslistComponent } from './fritslist.component';

describe('FritslistComponent', () => {
  let component: FritslistComponent;
  let fixture: ComponentFixture<FritslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FritslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FritslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
