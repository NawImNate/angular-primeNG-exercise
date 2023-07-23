import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ActivityFormComponent } from './activity-form/activity-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditActivityDialogComponent } from './edit-activity-dialog/edit-activity-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmptyTablePopupComponent } from './empty-table-popup/empty-table-popup.component';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    ActivityFormComponent,
    EditActivityDialogComponent,
    EmptyTablePopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    TableModule,
    ButtonModule,
    BrowserAnimationsModule,
    CalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
