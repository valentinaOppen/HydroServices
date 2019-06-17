import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { PrincipalHeaderComponent } from './components/principal-header/principal-header.component';
import { HistoryComponent } from './components/history/history.component';
import { WeatherComponent } from './components/weather/weather.component';

import { WeatherService } from './services/weather.service';
import { GeolocationService } from './services/geolocation.service';

import { ServicesComponent } from './components/services/services.component';
import { ListServicesComponent } from './components/list-services/list-services.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { AchievementsListComponent } from './components/achievements-list/achievements-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { NewsComponent } from './components/news/news.component';

import { EmbedVideo } from 'ngx-embed-video';
import { AppService } from './services/appService.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from './components/list-services/modal-basic';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminNavigationComponent } from './components/admin-navigation/admin-navigation.component';
import { AdminClientsComponent } from './components/admin-clients/admin-clients.component';
import { FormClientsComponent } from './components/form-clients/form-clients.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { AdminNewsComponent } from './components/admin-news/admin-news.component';
import { FormNewsComponent } from './components/form-news/form-news.component';
import { AdminNewsIndexComponent } from './components/admin-news-index/admin-news-index.component';

import { AgmCoreModule } from '@agm/core';
import { VideosComponent } from './components/videos/videos.component';
import { PhotosComponent } from './components/photos/photos.component';
import { AdminVideosComponent } from './components/admin-videos/admin-videos.component';
import { AdminPhotosComponent } from './components/admin-photos/admin-photos.component';
import { FormPhotosComponent } from './components/form-photos/form-photos.component';
import { FormVideosComponent } from './components/form-videos/form-videos.component';
import { AdminFooterComponent } from './components/admin-footer/admin-footer.component';
import { AdminIndexComponent } from './components/admin-index/admin-index.component';
import { SecondaryHeaderComponent } from './components/secondary-header/secondary-header.component';
import { NavigationSecondaryComponent } from './components/navigation-secondary/navigation-secondary.component';
import { NewsService } from './services/news.service';
import { NewsIndexComponent } from './components/news-index/news-index.component';
import { FilterNewsPipe } from './pipes/filter-news.pipe';
import {MatExpansionModule} from '@angular/material/expansion';
import { CountoModule }  from 'angular2-counto';
import { RecaptchaModule } from 'ng-recaptcha';

export function HttpLoaderFactory(http:HttpClient)
{
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [    
    AppComponent,
    NavigationComponent,
    ClientsListComponent,
    PrincipalHeaderComponent,
    HistoryComponent,
    WeatherComponent,
    ServicesComponent,
    ListServicesComponent,
    AchievementsComponent,
    AchievementsListComponent,
    ContactComponent,
    FooterComponent,
    IndexComponent,
    NewsComponent,
    NgbdModalBasic,
    LoginComponent,
    AdminComponent,
    AdminHeaderComponent,
    AdminNavigationComponent,
    AdminClientsComponent,
    FormClientsComponent,
    AdminNewsComponent,
    FormNewsComponent,
    AdminNewsIndexComponent,
    VideosComponent,
    PhotosComponent,
    AdminVideosComponent,
    AdminPhotosComponent,
    FormPhotosComponent,
    FormVideosComponent,
    AdminFooterComponent,
    AdminIndexComponent,
    SecondaryHeaderComponent,
    NavigationSecondaryComponent,    
    NewsIndexComponent, 
    FilterNewsPipe    
  ],
  imports: [
    RecaptchaModule.forRoot(),    
    CountoModule,
    MatExpansionModule,
    MatAutocompleteModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,     
    NgbModule,     
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    EmbedVideo.forRoot(),
    TranslateModule.forRoot({
      loader:
      {
        provide: TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    }),
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    })
  ],
  providers: [GeolocationService, WeatherService, AppService, 
              AuthService, UserService, ServicesComponent, NewsComponent,
              VideosComponent, PhotosComponent, NavigationComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
