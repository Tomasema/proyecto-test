import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductsComponent } from './views';

const routes: Routes = [
  // Home
  {
    path: '',
    component: HomeComponent,
    // Product list
    children: [
      {
        path: 'product',
        component: ProductsComponent
      }
    ],
  },
  {
      path: '',
      redirectTo: '',
      pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
