import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.less']
})
export class EmployeesComponent implements OnInit {
  displayedColumns = ['id', 'name', 'phone', 'city', 'address1', 'address2', 'postalCode', 'edit'];
  dataSource: any = new MatTableDataSource<any>();
  tableValue: any[];

  constructor(private commonService: CommonService, private router: Router) {
  }

  ngOnInit() {
    this.tableValue = this.commonService.getEmployees();
    this.dataSource = this.tableValue;
  }

  onKeyUp(event: any) {
    let searchKey = event.target.value.toUpperCase();
    if (!searchKey) {
      this.dataSource = this.tableValue;
    } else {
      this.dataSource = this.tableValue.filter(data => {
        if (data.name.toUpperCase().indexOf(searchKey) > -1 || data.address.city.toUpperCase().indexOf(searchKey) > -1) {
          return data;
        }
      });
    }
  }

  onAddNew() {
    this.router.navigate(['/employees/add']);
  }

  onEdit(row) {
    console.log(row);
    
    this.router.navigate(['/employees', row.id, 'edit']);
  }
}
