import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public product: Product;

  constructor() { }

  ngOnInit(): void {
    this.product = {
      name: "Monitor Dell",
      price: 25000,
      isOnSale: true,
      quantity: 0,
      imageUrl: "https://img.gigatron.rs/img/products/large/image5b854e7ad91cf.png"
    }
  }

  
  incrementInCart() {
    this.product.quantity++;
  }


  decrementInCart() {
    if (this.product.quantity > 0) {
      this.product.quantity--;
    }
  }
}
