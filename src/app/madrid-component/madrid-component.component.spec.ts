import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadridComponentComponent } from './madrid-component.component';

describe('MadridComponentComponent', () => {
  let component: MadridComponentComponent;
  let fixture: ComponentFixture<MadridComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MadridComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MadridComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
