import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

export interface Task {
  id: number;
  assignedTo: string;
  status: string;
  dueDate: string;
  priority: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>(this.loadTasks()); // Load tasks from local storage
  tasks$ = this.tasksSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {} // Inject PLATFORM_ID

  private loadTasks(): Task[] {
    if (isPlatformBrowser(this.platformId)) { // Check if running in browser
      const tasksJson = localStorage.getItem('tasks'); // Get tasks from local storage
      return tasksJson ? JSON.parse(tasksJson) : []; // Parse JSON or return an empty array
    }
    return []; // Return an empty array if not in browser
  }

  private saveTasks(tasks: Task[]): void {
    if (isPlatformBrowser(this.platformId)) { // Check if running in browser
      localStorage.setItem('tasks', JSON.stringify(tasks)); // Save tasks to local storage
    }
  }

  getTasks(): Task[] {
    return this.tasksSubject.getValue();
  }

  addTask(task: Task): void {
    const tasks = this.getTasks();
    tasks.push(task);
    this.tasksSubject.next(tasks);
    this.saveTasks(tasks); // Save tasks after adding
  }

  updateTask(updatedTask: Task): void {
    const tasks = this.getTasks().map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    this.tasksSubject.next(tasks);
    this.saveTasks(tasks); // Save tasks after updating
  }

  deleteTask(id: number): void {
    const tasks = this.getTasks().filter(task => task.id !== id);
    this.tasksSubject.next(tasks);
    this.saveTasks(tasks); // Save tasks after deletion
  }

  clearTasks(): void {
    if (isPlatformBrowser(this.platformId)) { // Check if running in browser
      localStorage.removeItem('tasks'); // Clear tasks from local storage
      this.tasksSubject.next([]); // Emit an empty array
    }
  }
}
