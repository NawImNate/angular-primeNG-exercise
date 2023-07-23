import { ActivitiesInterface } from './../activities-interface';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-activity-dialog',
  templateUrl: './edit-activity-dialog.component.html',
  styleUrls: ['./edit-activity-dialog.component.css'],
})
export class EditActivityDialogComponent {
  editForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditActivityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ActivitiesInterface,
    private formBuilder: FormBuilder
  ) {
    this.editForm = this.formBuilder.group({
      activity: data.activity,
      description: data.description,
      date: data.date,
    });
  }

  save(): void {
    if (this.editForm.valid) {
      const updatedActivity: ActivitiesInterface = {
        ...this.data,
        activity: this.editForm.get('activity')?.value || '',
        description: this.editForm.get('description')?.value || '',
        date: this.editForm.get('date')?.value || '',
      };
      this.dialogRef.close(updatedActivity);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
