import { Component, OnInit, inject } from '@angular/core';
import { Productos } from '@shared/models';
import { ProductService } from '@shared/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  // Injections 
  private _productos = inject(ProductService)
  
  // Vars
  listaProductos: Productos[] = []

  // Hook's life
  ngOnInit(): void {

  }

}
