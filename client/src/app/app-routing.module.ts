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
import { VideosComponent } from './components/videos/videos.component';
import { PhotosComponent } from './components/photos/photos.component';
import { AdminVideosComponent } from './components/admin-videos/admin-videos.component';
import { AdminPhotosComponent } from './components/admin-photos/admin-photos.component';
import { FormPhotosComponent } from './components/form-photos/form-photos.component';
import { FormVideosComponent } from './components/form-videos/form-videos.component';
import { AdminIndexComponent } from './components/admin-index/admin-index.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/index', 
    pathMatch: 'full' 
  },
  { 
    path: 'admin', 
    redirectTo: 'admin/index', 
    pathMatch: 'full' 
  },
  {
    path:'index',
    component: IndexComponent
  },
  {
    path:'index/:link',
    component: IndexComponent,    
  },
  {
    path:'services',
    component:IndexComponent
  },
  {
    path:'clients',
    component: ClientsListComponent
  },
  {
    path:'novedades',
    component: NewsComponent
  },
  {
    path:'contact',
    component: IndexComponent
  },
  {
    path:'videos',
    component: VideosComponent
  },
  {
    path:'photos',
    component: PhotosComponent
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
      path:'index',
      component:AdminIndexComponent
    },
    {
      path:'clients',
      component:AdminClientsComponent
      ,canActivate: [ AuthService ]     
    },
    {
      path:'logros',
      component: AchievementsComponent
      ,canActivate: [ AuthService ]
    },
    {
      path:'novedades',
      component: AdminNewsComponent
      ,canActivate: [ AuthService ]      
    },
    {
      path:'novedades/new',
      component: FormNewsComponent
      ,canActivate: [ AuthService ]
    },
    {
      path:'novedades/edit/:id',
      component: FormNewsComponent
      ,canActivate: [ AuthService ]
    },
    {
      path:'videos',
      component: FormVideosComponent
      ,canActivate: [ AuthService ]
    },
    {
      path:'videos/new',
      component: FormVideosComponent
      ,canActivate: [ AuthService ]
    },
    {
      path:'videos/edit/:id',
      component: FormVideosComponent
      ,canActivate: [ AuthService ]
    },
    {
      path:'photos',
      component: FormPhotosComponent
      ,canActivate: [ AuthService ]
    },
    {
      path:'photos/new',
      component: FormPhotosComponent
      ,canActivate: [ AuthService ]
    },
    {
      path:'photos/edit/:id',
      component: FormPhotosComponent
      ,canActivate: [ AuthService ]
    }]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
