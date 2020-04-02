import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.less']
})
export class AddEditEmployeeComponent {

  employee: any;
  isNew: boolean = true;
  employeeId: any;

  employeeForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private commonService: CommonService, private fb: FormBuilder, private route: Router) {
    this.activatedRoute.params.subscribe(params => {
      if (params && params.id) {
        this.employeeId = params.id;
        this.getEmployeeData(params.id);
      } else {
        this.initFormControl(null);
      }
    });
  }

  initFormControl(employee) {
    this.employeeForm = this.fb.group({
      name: new FormControl(employee ? employee.name : null, Validators.required),
      phone: new FormControl(employee ? employee.phone : null, Validators.required),
      city: new FormControl(employee ? employee.address.city : null),
      addressLine1: new FormControl(employee ? employee.address.address_line1 : null),
      addressLine2: new FormControl(employee ? employee.address.address_line2 : null),
      postalCode: new FormControl(employee ? employee.address.postal_code : null),
    });
  }

  getEmployeeData(id: number) {
    this.isNew = false;
    this.employee = this.commonService.getEmployeeById(id);
    this.initFormControl(this.employee);
  }

  onSave() {
    let employee = this.employeeForm.value;

    let newEmployee = {
      name: employee.name,
      phone: employee.phone,
      address: {
        city: employee.city,
        address_line1: employee.addressLine1,
        address_line2: employee.addressLine2,
        postal_code: employee.postalCode
      }
    };

    if (this.isNew) {
      this.commonService.addEmployee(newEmployee);
    } else {
      this.commonService.editEmployee(newEmployee, this.employeeId);
    }
    this.route.navigate(['/employees']);
  }
}
