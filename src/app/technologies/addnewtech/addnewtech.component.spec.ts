import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewtechComponent } from './addnewtech.component';

describe('AddnewtechComponent', () => {
  let component: AddnewtechComponent;
  let fixture: ComponentFixture<AddnewtechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewtechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
