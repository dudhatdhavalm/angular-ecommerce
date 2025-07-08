import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-buyer-dashboard',
  templateUrl: './buyer-dashboard.component.html',
  styleUrls: ['./buyer-dashboard.component.scss']
})
export class BuyerDashboardComponent implements OnInit {

  // Added type for all_products to satisfy strict mode
  all_products: any;
  // Changed Boolean (object) to boolean (primitive type) to satisfy strict mode
  show_checkout = false;

  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit(): void {
    // Added return type to ngOnInit to satisfy strict mode
    this.getAllProduct()
  }

  getAllProduct(): void {
    // Added return type to method to satisfy strict mode
    this.customerService.allProduct().subscribe(data => {
      this.all_products = data;
      // console.log("ALl Product", this.all_products);
    }, error => {
      console.log("My error", error);
    })
  }

  buyProduct(id: any): void {
    // Added parameter type and return type to satisfy strict mode
    this.show_checkout = true;
    this.customerService.quickBuyProduct(id) //We pass to serice from service we can access in another component
    this.router.navigateByUrl("/checkout");
  }

  addToCart(): void {
    // Added return type to satisfy strict mode
    alert("This a showcase, if you need this feature comment in the comment section")
  }

}