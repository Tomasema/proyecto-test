import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductListComponent } from './views/product-list/product-list.component';

const routes: Routes = [
  // Home
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
      // Product list
      children: [
        {
          path: 'products',
          component: ProductListComponent
        }
      ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
