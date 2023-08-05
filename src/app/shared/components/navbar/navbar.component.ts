// The angular imports
import { Component } from '@angular/core'
import { CommonModule } from '@angular/common';

// Material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
// Routing
import { HomeRoutingModule } from '@home/module';


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
export class NavbarComponent {

  // Variables
  SwitchMenuOptions: boolean = false;

  SwitchOption():void {
    this.SwitchMenuOptions = !this.SwitchMenuOptions
  }
}
