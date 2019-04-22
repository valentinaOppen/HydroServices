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
import { AuthService } from './services/auth.service';

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
    canActivate: [ AuthService ],    
    children:[
    {
      path:'clients',
      component:AdminClientsComponent,
      canActivate: [ AuthService ]     
    },
    {
      path:'logros',
      component: AchievementsComponent,
      canActivate: [ AuthService ]
    },
    {
      path:'novedades',
      component: AdminNewsComponent,
      canActivate: [ AuthService ]      
    },
    {
      path:'novedades/new',
      component: FormNewsComponent,
      canActivate: [ AuthService ]
    },
    {
      path:'novedades/edit/:id',
      component: FormNewsComponent,
      canActivate: [ AuthService ]
    }]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
