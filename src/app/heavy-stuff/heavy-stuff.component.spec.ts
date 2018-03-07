import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyStuffComponent } from './heavy-stuff.component';

describe('HeavyStuffComponent', () => {
  let component: HeavyStuffComponent;
  let fixture: ComponentFixture<HeavyStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavyStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavyStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
