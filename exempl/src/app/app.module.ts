import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatVideoModule } from 'mat-video';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

import { MainComponent } from './main/main.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ComponentAComponent } from './pages/component-a/component-a.component';
import { ComponentBComponent } from './pages/component-b/component-b.component';
import { ServiceComponent } from './service/service.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { MaterialComponent } from './material/material.component';
import { RecursionComponent } from './recursion/recursion.component';
import { VideoComponent } from './video/video.component';
import { Ckeditor5Component } from './ckeditor5/ckeditor5.component';
import { TinymceComponent } from './tinymce/tinymce.component';



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
    VideoComponent,
    Ckeditor5Component,
    TinymceComponent
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
    MatVideoModule,
    CKEditorModule,
    FormsModule,
    EditorModule
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ],
  bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
