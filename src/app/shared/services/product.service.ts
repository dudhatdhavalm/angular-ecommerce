import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../core/services/api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public product_url = environment.server_url + '/products/';

  constructor(private apiService: ApiService, private http: HttpClient) { }

  // Updated method signatures with proper TypeScript typing for Angular 12 compatibility
  allProduct(): Observable<any> {
    return this.apiService.get(this.product_url);
  }
  
  // Added explicit parameter type for product_dto
  addNewProduct(product_dto: any): Observable<any> {
    return this.apiService.post(this.product_url, product_dto);
  }

  // Added explicit parameter type for id
  singleProduct(id: string | number): Observable<any> {
    return this.apiService.get(this.product_url + id);
  }
  
  // Added explicit parameter types for id and product_dto
  updateProduct(id: string | number, product_dto: any): Observable<any> {
    return this.apiService.put(this.product_url + id, product_dto);
  }
  
  // Added explicit parameter type for id
  deleteProduct(id: string | number): Observable<any> {
    return this.apiService.delete(this.product_url + id);
  }
}