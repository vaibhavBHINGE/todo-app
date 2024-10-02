import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  // Import this
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddTaskPageComponent } from './add-task-page/add-task-page.component';
import { EditTaskPageComponent } from './edit-task-page/edit-task-page.component';
import { DeleteTaskPageComponent } from './delete-task-page/delete-task-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddTaskPageComponent,
    EditTaskPageComponent,
    DeleteTaskPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule  // Add this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
