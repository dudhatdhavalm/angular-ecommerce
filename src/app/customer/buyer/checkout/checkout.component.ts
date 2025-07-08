import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Product, User, Order } from '../../../core/models/object-model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  // Changed type annotations to be more specific and lowercase primitive types
  single_product_id!: number; // Added non-null assertion operator for strict mode
  user_id!: number; // Added non-null assertion operator for strict mode
  individual_product!: Product; // Added non-null assertion operator for strict mode
  user_detail!: User; // Added non-null assertion operator for strict mode
  user_address: any; // Added explicit any type
  user_contact_no!: number; // Changed from Number to lowercase number for primitive type
  order_dto!: Order; // Added non-null assertion operator for strict mode

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void { // Added return type for lifecycle method
    this.customerService.currentProduct.subscribe(product => this.single_product_id = product)
    this.user_id = Number(sessionStorage.getItem('user_session_id'));
    this.productDetail(this.single_product_id);
    this.userAddress(this.user_id);
  }

  productDetail(single_product_id: number): void { // Added parameter type and return type
    this.customerService.individualProduct(single_product_id).subscribe(data => {
      this.individual_product = data;
      // console.log("One Product", this.individual_product);
    }, error => {
      console.log("My error", error);
    })
  }
  
  userAddress(user_id: number): void { // Added parameter type and return type
    this.customerService.userDetail(user_id).subscribe(data => {
      // this.user_detail = data.address;
      this.user_address = data.address;
      this.user_contact_no = data.mobNumber;
    }, error => {
      console.log("My error", error);
    })
  }

  placeOrder(): void { // Added return type
    this.order_dto = {
      id: 0,
      userId: this.user_id,
      sellerId: 2, //Now it is hard coded, we are not implimented multi seller functionlity
      product: {
        id: this.individual_product.id,
        name: this.individual_product.name,
        uploadPhoto: this.individual_product.uploadPhoto,
        productDesc: this.individual_product.productDesc,
        mrp: this.individual_product.mrp,
        dp: this.individual_product.dp,
        status: this.individual_product.status
      },
      deliveryAddress: {
        id: 0,
        addLine1: this.user_address.addLine1,
        addLine2: this.user_address.addLine2,
        city: this.user_address.city,
        state: this.user_address.state,
        zipCode: Number(this.user_address.zipCode)
      },
      contact: this.user_contact_no,
      dateTime: new Date().toLocaleDateString()
    }
    // console.log("Place order dto", this.order_dto);
    this.customerService.insertNewOrder(this.order_dto).subscribe(data => {
      // console.log("Order placed successfully", data);
      alert("Order places successfully")
      this.router.navigateByUrl("/buyer-dashboard");
    }, err => {
      alert("Some Error Occured");
    })
  }
}