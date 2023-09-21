class Item{
    articulo;
    cantidad;
    precio;

    constructor(articulo,cantidad,precio){
        this.articulo = articulo;
        this.cantidad = cantidad;    
        this.precio = precio;
        this.subtotal = this.precio*this.cantidad;
    }
}

  
  
  
  