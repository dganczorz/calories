import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  
  // TODO Config it in proper way
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getAll() {
    console.log('IngredientsService.getAll');
    return this.http.get(`${this.uri}/ingredients`);
  }
}
