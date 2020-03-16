import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { MaterialComponent } from './material/material.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ServiceComponent } from './service/service.component';
import { RecursionComponent } from './recursion/recursion.component';
import { VideoComponent } from './video/video.component';
import { Ckeditor5Component } from './ckeditor5/ckeditor5.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: { title: 'MainComponent' }
  },
  {
    path: 'material',
    component: MaterialComponent,
    data: { title: 'MaterialComponent' }
  },
  {
    path: 'bootstrap',
    component: BootstrapComponent,
    data: { title: 'BootstrapComponent' }
  },
  {
    path: 'accordion',
    component: AccordionComponent,
    data: { title: 'AccordionComponent' }
  },
  {
    path: 'recursion',
    component: RecursionComponent,
    data: { title: 'RecursionComponent' }
  },
  {
    path: 'video',
    component: VideoComponent
  },
  {
    path: 'service',
    component: ServiceComponent,
    data: { title: 'AccordionComponent' }
  },
  {
    path: 'ckeditor',
    component: Ckeditor5Component,
    data: { title: 'AddCkeditor5' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
