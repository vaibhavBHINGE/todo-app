import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-delete-task-page',
  templateUrl: './delete-task-page.component.html',
  styleUrls: ['./delete-task-page.component.css']
})
export class DeleteTaskPageComponent implements OnInit {
  taskId!: number; // Use definite assignment assertion

  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.taskId = +this.route.snapshot.paramMap.get('id')!; // Get the task ID from the route
  }

  confirmDelete() {
    this.taskService.deleteTask(this.taskId); // Call the delete method from the service
    this.router.navigate(['/']); // Redirect to home page after deletion
  }

  goHome() {
    this.router.navigate(['/']); // Navigate to home on cancel
  }
}
