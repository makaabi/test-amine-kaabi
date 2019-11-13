import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLegumesComponent } from './list-legumes.component';

describe('ListLegumesComponent', () => {
  let component: ListLegumesComponent;
  let fixture: ComponentFixture<ListLegumesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLegumesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLegumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
