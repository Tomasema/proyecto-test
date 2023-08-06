import { Injectable } from '@angular/core';
import { Productos } from '@shared/models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Observable
  private myShoppingCart: Productos[] = [];
  private myCart = new BehaviorSubject<Productos[]>([]);
  myCart$ = this.myCart.asObservable();


  itemsCount() {
    return this.myShoppingCart.length;
  }

  // Agregar productos
  addProduct(product: Productos) {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
  }

  // Traer el carrito
  getShoppingCart() {
    return this.myShoppingCart;
  }

  // Traer total de productos al carrito. (productos y precio).
  getTotal() {  
    return this.myShoppingCart.reduce((sum, item) => sum + item.precio, 0)
  }
  
}
