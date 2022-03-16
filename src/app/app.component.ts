import { Component } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sideBarDisplay: boolean = false;

  sideItems: MenuItem[] = [
    {
      label: 'Home',
      items: [
        {
          label: 'Dashboard',
          icon: 'pi pi-fw pi-home',
          routerLink: ['/']
        }
      ]
    },
    {
      label: 'Lists',
      items: [
        {
          label: 'Employees',
          icon: 'pi pi-fw pi-users',
          routerLink: ['/crud-table']
        }
      ]
    }
  ]

  items: MenuItem[] = [
    {
      label: 'Employees',
      icon: 'pi pi-fw pi-users',
      routerLink: ['/crud-table']
    },
    {
      label: 'Days Off',
      icon: 'pi pi-fw pi-send',
      routerLink: ['/employees']
    }
    // {
    //     label: 'File',
    //     items: [{
    //             label: 'New',
    //             icon: 'pi pi-fw pi-plus',
    //             items: [
    //                 {label: 'Project'},
    //                 {label: 'Other'},
    //             ]
    //         },
    //         {label: 'Open'},
    //         {label: 'Quit'}
    //     ]
    // },
    // {
    //     label: 'Edit',
    //     icon: 'pi pi-fw pi-pencil',
    //     items: [
    //         {label: 'Delete', icon: 'pi pi-fw pi-trash'},
    //         {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
    //     ]
    // }
];

title = 'primeng-demo';

}
