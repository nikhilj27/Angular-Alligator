import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologylistComponent } from './technologylist.component';

describe('TechnologylistComponent', () => {
  let component: TechnologylistComponent;
  let fixture: ComponentFixture<TechnologylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
