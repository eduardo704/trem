import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProgramaListComponent } from './admin-programa-list.component';

describe('AdminProgramaListComponent', () => {
  let component: AdminProgramaListComponent;
  let fixture: ComponentFixture<AdminProgramaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProgramaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProgramaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
