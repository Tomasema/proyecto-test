// The angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
// Views
import { HomeComponent } from './home.component';
import { ProductListComponent } from './views/product-list/product-list.component';


@NgModule({
  declarations: [
    // Views
    HomeComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
