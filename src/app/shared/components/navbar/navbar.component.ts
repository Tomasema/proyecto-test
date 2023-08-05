// The angular imports
import { Component } from '@angular/core';
// Material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';




@Component({
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule,
    MatBadgeModule
  ],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

}
