import { Component, Input } from '@angular/core';
import { Productos } from '@shared/models';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']

})
export class ProductCardComponent {

  // Product data for card

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
}
