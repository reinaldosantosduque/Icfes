import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJoyaComponent } from './create-joya.component';

describe('CreateJoyaComponent', () => {
  let component: CreateJoyaComponent;
  let fixture: ComponentFixture<CreateJoyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateJoyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJoyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
