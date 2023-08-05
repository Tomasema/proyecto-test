// The angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
// Views
import { HomeComponent } from './home.component';
import { ProductsComponent } from './views/products/products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
// Shared
import { NavbarComponent } from 'src/app/shared/components';
// Material Imports
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    // Views
    HomeComponent,
    ProductsComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarComponent,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class HomeModule { }
