import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getcrimes(){
    return this.http.get<Component[]>('../home/assets/data/menu.json');

  }
}
