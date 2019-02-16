import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarEntryComponent } from './sidebar-entry.component';

describe('SidebarEntryComponent', () => {
  let component: SidebarEntryComponent;
  let fixture: ComponentFixture<SidebarEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
