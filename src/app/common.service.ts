import { Injectable } from '@angular/core';
import *  as  data from './data.json';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  employees: any[] = (data as any).default.data;

  constructor() { }

  getEmployees() {
    return this.employees;
  }

  addEmployee(employee: any) {
    this.employees.push(employee);
  }
}
