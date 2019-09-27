import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { MaterialComponent } from './material/material.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ServiceComponent } from './service/service.component';
import { RecursionComponent } from './recursion/recursion.component';


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
