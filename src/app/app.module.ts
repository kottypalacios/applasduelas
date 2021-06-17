import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './header/nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../app/angular-material/angular-material.module';
import { BannerComponent } from './components/banner/banner.component';
import { PagetwoComponent } from './components/pagetwo/pagetwo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    PagetwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    AngularMaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
