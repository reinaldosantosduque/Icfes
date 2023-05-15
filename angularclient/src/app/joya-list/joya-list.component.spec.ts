import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoyaListComponent } from './joya-list.component';

describe('JoyaListComponent', () => {
  let component: JoyaListComponent;
  let fixture: ComponentFixture<JoyaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoyaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoyaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
