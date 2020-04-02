import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.less']
})
export class EmployeesComponent implements OnInit {
  displayedColumns = ['id', 'name', 'phone', 'city', 'address1', 'address2', 'postalCode'];
  dataSource: any = new MatTableDataSource<any>();

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    this.dataSource = this.commonService.getEmployees();
    console.log(this.dataSource);
  }

}
