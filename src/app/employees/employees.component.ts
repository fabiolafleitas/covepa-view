import { Component, OnInit } from '@angular/core';
import { Person } from '../domain/person';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  tableConfig: {data:Person[], rowsPerPage:number, rows:any[]};
  employees: Person[];

  constructor() { }

  ngOnInit(): void {
    this.employees = [
      {id:1, firstName:'Chae-Young', lastName:'Jerneja', email:'cjerneja@rrhh.com', department:'Development', image:'avataaars1.png'},
      {id:2, firstName:'Mirinda', lastName:'Anita', email:'manita@rrhh.com', department:'Development', image:'avataaars2.png'},
      {id:3, firstName:'Einar', lastName:'Wit', email:'ewit@rrhh.com', department:'Development', image:'avataaars3.png'},
      {id:4, firstName:'Andris', lastName:'Fannie', email:'afannie@rrhh.com', department:'Development', image:'avataaars4.png'},
      {id:5, firstName:'Amitabh', lastName:'Fedora', email:'adefora@rrhh.com', department:'Development', image:'avataaars5.png'}
    ];

    this.tableConfig = {
      data: this.employees,
      rows: [
        {
          label: 'Image',
          value: 'image',
          allowFilter: false
        },
        {
          label: 'First Name',
          value: 'firstName',
          allowFilter: true
        },
        {
          label: 'Last Name',
          value: 'lastName',
          allowFilter: true
        }
      ],
      rowsPerPage: 5,
    };
  }

}
