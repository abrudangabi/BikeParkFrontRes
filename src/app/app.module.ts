import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
// import { DatepickerModule } from 'angular-mat-datepicker';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RezervarebikeparkDetailComponent} from './rezervarebikepark-detail/rezervarebikepark-detail.component';
import {RezervarebikeparksComponent} from './rezervarebikeparks/rezervarebikeparks.component';
import { RezervarebikeparkSearchComponent } from './rezervarebikepark-search/rezervarebikepark-search.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RezervarebikeparksComponent,
    RezervarebikeparkDetailComponent,
    RezervarebikeparkSearchComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
