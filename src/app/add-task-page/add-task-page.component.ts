import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-add-task-page',
  templateUrl: './add-task-page.component.html',
  styleUrls: ['./add-task-page.component.css']
})
export class AddTaskPageComponent implements OnInit {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService, private router: Router) {
    this.taskForm = this.fb.group({
      assignedTo: ['', Validators.required],
      status: ['', Validators.required],
      dueDate: ['', Validators.required],
      priority: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.taskForm.valid) {
      const task: Task = { ...this.taskForm.value, id: Math.random() }; // Assign a random ID
      this.taskService.addTask(task);
      this.router.navigate(['/']); // Navigate to home after saving
    }
  }

  goHome() {
    this.router.navigate(['/']); // Navigate to home on cancel
  }
}
