import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private product: ProductsService) {}

  ngOnInit(): void {
    this.geAllProducts();
  }

  geAllProducts() {
    this.product.getAllSimple().subscribe((response) => {
      this.products = response;
    });
  }
}
