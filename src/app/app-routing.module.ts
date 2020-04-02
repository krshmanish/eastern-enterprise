import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full',
  },
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'employees/add',
    component: AddEditEmployeeComponent
  },
  {
    path: 'employees/:id/edit',
    component: AddEditEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
