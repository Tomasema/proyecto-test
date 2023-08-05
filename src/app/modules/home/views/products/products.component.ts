import { Component, OnInit, inject } from '@angular/core';
import { Productos } from '@shared/models';
import { ProductService } from '@shared/services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // Injections 
  private _productos = inject(ProductService)
  
  // Vars
  listaProductos: Productos[] = []

  // Hook's life
  ngOnInit(): void {
    this.loadProducts()
  }

  public loadProducts(){
    this._productos.getProduct()
    .subscribe(res => {
      this.listaProductos = res
    })
  }
}
