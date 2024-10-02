import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

export interface Task {
    id: number;
    assignedTo: string;
    status: string;
    dueDate: Date;
    priority: string;
    description: string;
}

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private tasksSubject = new BehaviorSubject<Task[]>(this.loadTasks());
    tasks$ = this.tasksSubject.asObservable();
    private apiUrl = 'http://localhost:3000/api/tasks'; // Update with your API endpoint

    constructor(private http: HttpClient) {}

    private loadTasks(): Task[] {
        const tasks = localStorage.getItem('tasks');
        return tasks ? JSON.parse(tasks) : [];
    }

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.apiUrl);
    }

    addTask(task: Task): Observable<Task> {
        return this.http.post<Task>(this.apiUrl, task);
    }

    updateTask(task: Task): Observable<Task> {
        return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task);
    }

    deleteTask(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    clearTasks(): void {
        localStorage.removeItem('tasks');
        this.tasksSubject.next([]); // Emit an empty array
    }
}
