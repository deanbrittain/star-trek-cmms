import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-crew-member-dialog',
  templateUrl: './add-crew-member-dialog.component.html',
  styleUrls: ['./add-crew-member-dialog.component.scss'],
})
export class AddCrewMemberDialogComponent {
  form: FormGroup;
  ranks = [
    'Captain',
    'Commander',
    'Lieutenant Commander',
    'Lieutenant',
    'Lieutenant Junior Grade',
    'Ensign',
  ];

  roles = [
    'Command Staff',
    'Science Staff',
    'Medical Staff',
    'Operations Staff',
    'Security Staff',
  ];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddCrewMemberDialogComponent>
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      rank: ['', Validators.required],
      role: ['', Validators.required],
      specialization: ['', Validators.required],
      certifications: [''],
      contact: ['', Validators.required],
      status: ['', Validators.required],
      avatarUrl: [null],
    });
  }

  onFileSelect(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const avatarUrlControl = this.form.get('avatarUrl');
        if (avatarUrlControl) {
          avatarUrlControl.setValue(reader.result as string);
        }
      };

      reader.readAsDataURL(file);
    }
  }

  submit(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
}
