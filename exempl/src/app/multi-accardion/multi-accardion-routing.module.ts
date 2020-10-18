import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiAccardionComponent } from './multi-accardion.component';
const routes: Routes = [
    {
        path: '',
        component: MultiAccardionComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class MultiAccardionRoutingModule {}