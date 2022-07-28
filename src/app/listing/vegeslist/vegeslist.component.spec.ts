import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegeslistComponent } from './vegeslist.component';

describe('VegeslistComponent', () => {
  let component: VegeslistComponent;
  let fixture: ComponentFixture<VegeslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegeslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegeslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
