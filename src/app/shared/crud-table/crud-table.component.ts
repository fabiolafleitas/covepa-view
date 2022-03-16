import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

import { Person } from '../../domain/person';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class CrudTableComponent implements OnInit {
  //@Input() mainModel:string;

  tableConfig: {title:string, data:any[], rowsPerPage:number, rows:any[]};
  allowFilterRows: any[];
  row:any;
  selectedRows: any[];
  submitted:boolean = false;
  createEditDialog:boolean = false;

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const dataModelFromRoute = routeParams.get('model');

    let data: any[] = [];
    if(dataModelFromRoute === 'employees'){
      data = [
        {id:1, firstName:'Chae-Young', lastName:'Jerneja', email:'cjerneja@rrhh.com', department:'Development', documentNumber: 100, image:'avataaars1.png'},
        {id:2, firstName:'Mirinda', lastName:'Anita', email:'manita@rrhh.com', department:'Development', documentNumber: 200, image:'avataaars2.png'},
        {id:3, firstName:'Einar', lastName:'Wit', email:'ewit@rrhh.com', department:'Development', documentNumber: 300, image:'avataaars3.png'},
        {id:4, firstName:'Andris', lastName:'Fannie', email:'afannie@rrhh.com', department:'Development', documentNumber: 400, image:'avataaars4.png'},
        {id:5, firstName:'Amitabh', lastName:'Fedora', email:'adefora@rrhh.com', department:'Development', documentNumber: 500, image:'avataaars5.png'}
      ];
    }

    this.tableConfig = {
      title: dataModelFromRoute ? dataModelFromRoute?.toString().charAt(0).toUpperCase() + dataModelFromRoute.toString().slice(1) : '',
      data: data,
      rows: [
        {
          label: 'Image',
          value: 'image',
          allowFilter: false,
          require: false,
          type: 'file'
        },
        {
          label: 'First Name',
          value: 'firstName',
          allowFilter: true,
          require: true,
          type: 'text'
        },
        {
          label: 'Last Name',
          value: 'lastName',
          allowFilter: true,
          require: true,
          type: 'text'
        },
        {
          label: 'ID Number',
          value: 'documentNumber',
          allowFilter: false,
          require: true,
          type: 'number'
        }
      ],
      rowsPerPage: 5,
    };

    this.allowFilterRows = (this.tableConfig.rows.filter(row => row.allowFilter)).map(allowFilterRow => allowFilterRow.value);
  }

  openNew() {
    this.row = {};
    this.submitted = false;
    this.createEditDialog = true;
  }

  deleteSelectedRows() {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete the selected ' + this.selectedRows.length + ' items?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.tableConfig.data = this.tableConfig.data.filter(val => !this.selectedRows.includes(val));
            this.selectedRows = [];
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Item(s) deleted', life: 3000});
        }
    });
  }

  editRow(row:any) {
    this.row = {...row};
    this.createEditDialog = true;
  }

  deleteRow(row:any) {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' + row.firstName + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.tableConfig.data = this.tableConfig.data.filter(val => val.id !== row.id);
            this.row = {};
            this.selectedRows = [];
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Item deleted', life: 3000});
        }
    });
  }

  hideDialog() {
    this.createEditDialog = false;
    this.submitted = false;
  }

  // saveNewPerson() {
  //   this.submitted = true;

  //   if (this.person.firstName.length && this.person.lastName.length ){
  //     this.person.id = this.people.length + 1;
  //     this.person.email = (this.person.firstName.substring(0,1)).toLocaleLowerCase() + (this.person.lastName.split(' ')[0]).toLowerCase() + '@rrhh.com';
  //     this.person.image = 'avataaars-default.png';
  //     this.person.department = 'Development';
  //     this.people.push(this.person);
  //     this.messageService.add({severity:'success', summary: 'Successful', detail: 'Employee Created', life: 3000});

  //     this.people = [...this.people];
  //     this.personDialog = false;
  //     this.person = {firstName:'', lastName:''};
  //     console.log(this.people);
  //   }
  // }

}
