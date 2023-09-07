import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { generateManyProducts } from '../models/product.mock';
import { Product } from '../models/product.model';
import { ProductsService } from './product.service';

describe('ProductService', () => {
  let productService: ProductsService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService],
    });
    productService = TestBed.inject(ProductsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be create', () => {
    expect(productService).toBeTruthy();
  });

  describe('Tests for getAllSimple', () => {
    it('Should return a product list', (doneFn) => {
      const mockData: Product[] = generateManyProducts(2);
      productService.getAllSimple().subscribe((response) => {
        // assert
        expect(response.length).toEqual(mockData.length);
        expect(response).toEqual(mockData);

        doneFn();
      });

      const url = `${environment.API_URL}/api/v1/products`;
      const req = httpController.expectOne(url);
      req.flush(mockData);
      httpController.verify();
    });
  });
});
