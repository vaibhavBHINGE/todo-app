import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AddTaskPageComponent } from './add-task-page/add-task-page.component';
import { EditTaskPageComponent } from './edit-task-page/edit-task-page.component';
import { DeleteTaskPageComponent } from './delete-task-page/delete-task-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'add-task', component: AddTaskPageComponent },
  { path: 'edit-task/:id', component: EditTaskPageComponent },
  { path: 'delete-task/:id', component: DeleteTaskPageComponent },
  { path: '**', redirectTo: '' }  // Redirect any unknown paths to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
