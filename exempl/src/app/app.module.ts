import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatVideoModule } from 'mat-video';

import { MainComponent } from './main/main.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ComponentAComponent } from './pages/component-a/component-a.component';
import { ComponentBComponent } from './pages/component-b/component-b.component';
import { ServiceComponent } from './service/service.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { MaterialComponent } from './material/material.component';
import { RecursionComponent } from './recursion/recursion.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AccordionComponent,
    ComponentAComponent,
    ComponentBComponent,
    ServiceComponent,
    BootstrapComponent,
    MaterialComponent,
    RecursionComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatButtonModule,
    MatVideoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
