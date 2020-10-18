import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LigaComponent } from './components/liga/liga.component';
import { MultiAccardionComponent } from './multi-accardion.component';
import { MultiAccardionRoutingModule } from './multi-accardion-routing.module';

import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [LigaComponent, MultiAccardionComponent],
  exports: [LigaComponent],
  imports: [
    CommonModule,
    MultiAccardionRoutingModule,
    MatButtonModule
  ]
})
export class MultiAccardionModule { }
