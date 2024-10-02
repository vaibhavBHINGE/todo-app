import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-edit-task-page',
  templateUrl: './edit-task-page.component.html',
  styleUrls: ['./edit-task-page.component.css']
})
export class EditTaskPageComponent implements OnInit {
  taskForm: FormGroup;
  taskId!: number; // Use definite assignment assertion

  constructor(private fb: FormBuilder, private taskService: TaskService, private route: ActivatedRoute, private router: Router) {
    this.taskForm = this.fb.group({
      assignedTo: ['', Validators.required],
      status: ['', Validators.required],
      dueDate: ['', Validators.required],
      priority: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.taskId = +this.route.snapshot.paramMap.get('id')!; // Get the task ID from the route
    const task = this.taskService.getTasks().find(t => t.id === this.taskId); // Get the task to edit

    if (task) {
      this.taskForm.patchValue(task); // Populate the form with task data
    }
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const updatedTask: Task = { ...this.taskForm.value, id: this.taskId }; // Ensure the ID remains the same
      this.taskService.updateTask(updatedTask); // Update the task in the service
      this.router.navigate(['/']); // Navigate back to the home page
    }
  }

  goHome() {
    this.router.navigate(['/']); // Navigate to home on cancel
  }
}
