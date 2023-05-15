import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJoyaComponent } from './update-joya.component';

describe('UpdateJoyaComponent', () => {
  let component: UpdateJoyaComponent;
  let fixture: ComponentFixture<UpdateJoyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateJoyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJoyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
