import { Achievements } from './models/achievements';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListServicesComponent } from './components/list-services/list-services.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { IndexComponent } from './components/index/index.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminClientsComponent } from './components/admin-clients/admin-clients.component';
import { FormClientsComponent } from './components/form-clients/form-clients.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { AdminNewsComponent } from './components/admin-news/admin-news.component';
import { FormNewsComponent } from './components/form-news/form-news.component';

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
    path:'index/:lang',
    component: IndexComponent,    
  },
  {
    path:'services',
    component:ListServicesComponent
  },
  {
    path:'clients',
    component: ClientsListComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'admin',
    component:AdminComponent,
    children:[
    {
      path:'clients',
      component:AdminClientsComponent     
    },
    {
      path:'logros',
      component: AchievementsComponent
    },
    {
      path:'novedades',
      component: AdminNewsComponent,
      children:
      [{
        path:'novedades/new',
        component: FormNewsComponent
      },
      {
        path:'edit',
        component:FormNewsComponent
      }]
    }]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
