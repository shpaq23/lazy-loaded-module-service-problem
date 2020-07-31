import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RainForestComponent } from './rain-forest.component';


const routes: Routes = [
  {
    path: '',
    component: RainForestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RainForestRoutingModule {
}
