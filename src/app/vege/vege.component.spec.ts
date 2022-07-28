import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegeComponent } from './vege.component';

describe('VegeComponent', () => {
  let component: VegeComponent;
  let fixture: ComponentFixture<VegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
