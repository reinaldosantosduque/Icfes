import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoyaService {

  private baseUrl = 'http://localhost:8080/prueba-tecnica/api/joyas';

  constructor(private http: HttpClient) { }

  getJoya(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createJoya(joya: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, joya);
  }

  updateJoya(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteJoya(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getJoyasList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
