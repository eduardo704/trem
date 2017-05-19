import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaDetailComponent } from './programa-detail.component';

describe('ProgramaDetailComponent', () => {
  let component: ProgramaDetailComponent;
  let fixture: ComponentFixture<ProgramaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
