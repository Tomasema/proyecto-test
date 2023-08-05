// The angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
// Views
import { HomeComponent } from './home.component';
import { ProductsComponent } from '@home/views';
// Components
import { ProductCardComponent } from '@home/components';
// Shared
import { NavbarComponent } from '@shared/components';
// Material Imports
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    // Views
    HomeComponent,
    ProductsComponent,
    // Components
    ProductCardComponent
  ],
  imports: [
    // Angular
    CommonModule,
    HomeRoutingModule,
    // Shared
    NavbarComponent,
    // Material
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class HomeModule { }
