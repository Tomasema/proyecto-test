// The angular imports
import { Component, OnInit, inject } from '@angular/core'
import { CommonModule } from '@angular/common';

// Material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
// Routing
import { HomeRoutingModule } from '@home/module';
import { CartService } from '@shared/services';
import { Productos } from '@shared/models';


@Component({
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule,
    MatBadgeModule,
    HomeRoutingModule,
    CommonModule
  ],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  private _cart = inject(CartService)

  // Variables
  SwitchMenuOptions: boolean = false;
  myShoppingCart: Productos[] = [];


  SwitchOption():void {
    this.SwitchMenuOptions = !this.SwitchMenuOptions
  }

  
  ngOnInit(): void {
    this.myShoppingCart = this._cart.getShoppingCart();
  }



}
