import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListServicesComponent } from './components/list-services/list-services.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/index', 
    pathMatch: 'full' 
  },
  {
    path:'index',
    component: IndexComponent
  },
  {
    path:'services',
    component:ListServicesComponent
  },
  {
    path:'clients',
    component: ClientsListComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
