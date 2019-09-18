import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { MaterialComponent } from './material/material.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ServiceComponent } from './service/service.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: { title: 'MainComponent' }
  },
  {
    path: 'material',
    component: MaterialComponent,
    data: { title: 'AccordionComponent' }
  },
  {
    path: 'bootstrap',
    component: BootstrapComponent,
    data: { title: 'AccordionComponent' }
  },
  {
    path: 'accordion',
    component: AccordionComponent,
    data: { title: 'AccordionComponent' }
  },
  {
    path: 'service',
    component: ServiceComponent,
    data: { title: 'AccordionComponent' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
