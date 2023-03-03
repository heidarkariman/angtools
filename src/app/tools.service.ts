import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tool } from './tool.model';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  constructor(private http: HttpClient) {}

  getTools(): Observable<Tool[]> {
    return this.http.get<Tool[]>('assets/tools.json');
  }
}