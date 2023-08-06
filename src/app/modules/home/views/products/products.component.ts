import { Component, OnInit, inject } from '@angular/core';
import { Productos } from '@shared/models';
import { CartService, ProductService } from '@shared/services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // Injections 
  private _productos = inject(ProductService)
  private _cart = inject(CartService)

  // Vars
  total: number = 0
  myShoppingCart: Productos[] = [];

  // Vars
  listaProductos: Productos[] = []

  // Hook's life
  ngOnInit(): void {
    this.loadProducts()
    this.myShoppingCart = this._cart.getShoppingCart();
  }

  public loadProducts() {
    this._productos.getProduct()
      .subscribe(res => {
        this.listaProductos = res
      })
  }


  //Adding product at Cart.
  onAddToShoppingCart(producto: Productos) {
    this._cart.addProduct(producto);
    this.total = this._cart.getTotal();
  }
}
