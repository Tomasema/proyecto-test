export interface Productos{
    destacado: number
    nombre: string
    id_producto: number
    id_subcategoria: number
    precio: number
    imagenes: Imagenes
    vendible: number
    stock: number
    garantia: number
    iva: number
}

  export interface Imagenes{
    nombre: string
    id_producto_imagen: number
    orden: number
  }