import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfcharacterComponent } from './confcharacter.component';

describe('ConfcharacterComponent', () => {
  let component: ConfcharacterComponent;
  let fixture: ComponentFixture<ConfcharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfcharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfcharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
