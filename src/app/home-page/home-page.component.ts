import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../task.service';

declare var $: any; // Import jQuery if you are using it for modal control

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.tasks$.subscribe(tasks => {
      this.tasks = tasks; // Subscribe to the tasks observable
    });
  }

  // Method to open the Clear All Tasks confirmation modal
  openClearAllModal() {
    $('#clearAllModal').modal('show'); // Show the modal using jQuery
  }

  // Method to clear all tasks
  clearAllTasks() {
    this.taskService.clearTasks(); // Call the clear method in the service
    this.tasks = []; // Clear the local tasks array
  }
}
