import { Injectable } from '@angular/core';
import { ActivitiesInterface } from './activities-interface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  activity: any;
  activitiesList: any;
  constructor() {}

  getActivities(): ActivitiesInterface[] {
    let activities: ActivitiesInterface[];
    activities = JSON.parse(localStorage.getItem('activities') || '[]');
    return activities;
  }

  addActivity(activity: ActivitiesInterface): boolean {
    try {
      console.log(activity);
      let activities: ActivitiesInterface[] = [];
      if (localStorage.getItem('activities') === null) {
        activities.push(activity);
        localStorage.setItem('activities', JSON.stringify(activities));
      } else {
        activities = JSON.parse(localStorage.getItem('activities') || '[]');
        activities.push(activity);
        localStorage.setItem('activities', JSON.stringify(activities));
      }
      return true;
    } catch {
      return false;
    }
  }

  editActivity(activity: ActivitiesInterface): boolean {
    try {
      const activities: ActivitiesInterface[] = this.getActivities();
      const index = activities.findIndex((a) => a.id === activity.id);
      if (index !== -1) {
        activities[index] = activity;
        localStorage.setItem('activities', JSON.stringify(activities));
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  deleteActivity(id: number): boolean {
    try {
      const activities: ActivitiesInterface[] = this.getActivities();
      const index = activities.findIndex((a) => a.id === id);
      if (index !== -1) {
        activities.splice(index, 1);
        localStorage.setItem('activities', JSON.stringify(activities));
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  filterActivitiesByDate(selectedDate: Date): ActivitiesInterface[] {
    return this.activitiesList.filter(
      (activity: { date: string | number | Date }) =>
        new Date(activity.date).getTime() === selectedDate.getTime()
    );
  }
}

//   deleteActivity(activities: ActivitiesInterface) {
//     for (let i = 0; i < this.activities.length; i++) {
//       if (ActivitiesInterface == this.activities[i]) {
//         this.activities.splice(i, 1);
//         localStorage.setItem('activities', JSON.stringify(this.activities));
//       }
//     }
//   }
// }
