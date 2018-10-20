import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getWorkouts() {
    return this.http.get<any[]>(`${this.baseUrl}/workouts`);
  }

  getWorkout(id) {
    return this.http.get<any>(`${this.baseUrl}/workouts/${id}`);
  }

  addWorkout(workout: any) {
    return this.http.post(`${this.baseUrl}/workouts`, workout);
  }

  updateWorkout(workout: any) {
    return this.http.put(`${this.baseUrl}/workouts/${workout.id}`, workout);
  }

  saveWorkout(workout: any) {
    if (workout.id) {
      return this.updateWorkout(workout);
    } else {
      return this.addWorkout(workout);
    }
  }

  deleteWorkout(id) {
    return this.http.delete(`${this.baseUrl}/workouts/${id}`);
  }

  getLocations() {
    return this.http.get<any[]>(`${this.baseUrl}/locations`);
  }

  searchLocations(searchTerm) {
    return this.http.get<any[]>(`${this.baseUrl}/locations?q=${searchTerm}`);
  }

  getPerfTargets() {
    return this.http.get(`${this.baseUrl}/performanceTargets`);
  }
  
  savePerfTargets(perfTargets: any){
    return this.http.put(`${this.baseUrl}/performanceTargets`, perfTargets);
  }
  
}
