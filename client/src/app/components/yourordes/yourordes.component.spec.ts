import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourordesComponent } from './yourordes.component';

describe('YourordesComponent', () => {
  let component: YourordesComponent;
  let fixture: ComponentFixture<YourordesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourordesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourordesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
