import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Productos } from '@shared/models';
import { CartService } from '@shared/services';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']

})
export class ProductCardComponent {

  // Emición de evento para el carrito
  @Output() addedProduct = new EventEmitter<Productos>();

  // Info del producto
  @Input() producto: Productos = {
    destacado: 0,
    nombre: '',
    id_producto: 0,
    id_subcategoria: 0,
    precio: 0,
    imagenes: {
      nombre: '',
      id_producto_imagen: 0,
      orden: 0
    },
    vendible: 0,
    stock: 0,
    garantia: 0,
    iva: 0
  }

   // Agregar producto al carrito.
   onAddToCart(): void {
    this.addedProduct.emit(this.producto);
    window.alert('Tu producto fue agregado al carrito');
    console.log(this.producto);
  }

}
