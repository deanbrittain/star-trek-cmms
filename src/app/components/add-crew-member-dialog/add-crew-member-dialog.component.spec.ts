import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCrewMemberDialogComponent } from './add-crew-member-dialog.component';

describe('AddCrewMemberDialogComponent', () => {
  let component: AddCrewMemberDialogComponent;
  let fixture: ComponentFixture<AddCrewMemberDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCrewMemberDialogComponent]
    });
    fixture = TestBed.createComponent(AddCrewMemberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
