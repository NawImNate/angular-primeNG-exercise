import { ActivitiesInterface } from './../activities-interface';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivitiesService } from '../activites-service.service';
import { MatDialog } from '@angular/material/dialog';
import { EditActivityDialogComponent } from '../edit-activity-dialog/edit-activity-dialog.component';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-activity-form',
  templateUrl: 'activity-form.component.html',
  styleUrls: ['activity-form.component.css'],
})
export class ActivityFormComponent implements OnInit {
  ActivitiesService: ActivitiesService = inject(ActivitiesService);
  activityForm!: FormGroup;
  activitiesList: ActivitiesInterface[];
  highestId: number = 0;
  filteredActivities: ActivitiesInterface[];
  filterDate: Date;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) {
    this.filteredActivities = [];
  }

  ngOnInit() {
    this.activityForm = this.formBuilder.group({
      activity: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
    });
    this.getActivities();
  }

  addActivity() {
    const activityObj: ActivitiesInterface = {
      activity: this.activityForm.value.activity,
      description: this.activityForm.value.description,
      date: new Date(this.activityForm.value.date),
      id: this.highestId + 1,
    };
    console.log(activityObj);
    let result = this.ActivitiesService.addActivity(activityObj);
    if (result) {
      //get activities after succesful save
      this.getActivities();
    }
  }

  getActivities() {
    this.activitiesList = this.ActivitiesService.getActivities();
    // set the highest ID to auto increment for any new activities
    for (let i = 0; i < this.activitiesList.length; i++) {
      if (this.activitiesList[i].id > this.highestId) {
        this.highestId = this.activitiesList[i].id;
        console.log(this.highestId);
      }
      // Convert the 'date' property to a Date object
      this.activitiesList[i].date = new Date(this.activitiesList[i].date);
    }
    this.filteredActivities = this.activitiesList; // Initialize filteredActivities with all activities
  }

  openEditDialog(activity: ActivitiesInterface): void {
    const dialogRef = this.dialog.open(EditActivityDialogComponent, {
      data: activity,
    });

    dialogRef
      .afterClosed()
      .subscribe((result: ActivitiesInterface | undefined) => {
        if (result) {
          this.ActivitiesService.editActivity(result);
          this.getActivities();
        }
      });
  }

  editActivity(activityObj: ActivitiesInterface): void {
    const result = this.ActivitiesService.editActivity(activityObj);
    if (result) {
      this.getActivities();
    }
  }

  deleteActivity(id: number): void {
    const result = this.ActivitiesService.deleteActivity(id);
    if (result) {
      this.getActivities();
    }
  }

  // filterActivities(selectedDate: Date) {
  //   console.log('balls');
  //   if (selectedDate) {
  //     this.filteredActivities = this.activitiesList.filter((activity) => {
  //       let test1 = new Date(activity.date).getTime();
  //       let test2 = selectedDate.getTime();
  //       new Date(activity.date).getTime() === selectedDate.getTime();
  //       console.log(test1);
  //       console.log(test2);
  //     });
  //   } else {
  //     this.filteredActivities = this.activitiesList;
  //   }
  // }

  filterActivities(event: Event) {
    const selectedDate = (event.target as HTMLInputElement).value;
    if (selectedDate) {
      const parsedDate = new Date(selectedDate);
      this.filteredActivities = this.activitiesList.filter(
        (activity) =>
          activity.date.toISOString().slice(0, 10) ===
          parsedDate.toISOString().slice(0, 10)
      );
    } else {
      this.filteredActivities = this.activitiesList;
    }
  }

  clear(table: Table) {
    table.clear();
  }
}
function editActivity(activityObj: any, ActivitiesInterface: any) {
  throw new Error('Function not implemented.');
}

function deleteActivity(id: any, number: any) {
  throw new Error('Function not implemented.');
}
