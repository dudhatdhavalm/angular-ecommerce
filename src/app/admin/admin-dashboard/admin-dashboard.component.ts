import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  // Added proper type annotations for class properties to satisfy strict mode
  user_dashboard_data: any;
  total_user: number = 0;
  admin_user: number = 0;
  seller_user: number = 0;
  buyer_user: number = 0;

  product_dashboard_data: any;
  total_product: number = 0;
  publish_product: number = 0;
  inactive_product: number = 0;
  draft_product: number = 0;

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
    // Added return type to ngOnInit to satisfy strict mode
    this.adminUserDashboardData();
    this.adminProductDashboardData();
  }

  userDashboard(): void {
    // Added return type to method to satisfy strict mode
    this.router.navigateByUrl("/admin/user");
  }

  productDashboard(): void {
    // Added return type to method to satisfy strict mode
    this.router.navigateByUrl("/admin/product");
  }

  adminUserDashboardData(): void {
    // Added return type to method to satisfy strict mode
    this.adminService.userDashboardData().subscribe(
      (data: any) => {
        // Added type annotation for data parameter
        this.user_dashboard_data = data;
        for (let user in this.user_dashboard_data) {
          // console.log(this.user_dashboard_data[status].status);
          if (this.user_dashboard_data[user].role == 'admin') {
            ++this.admin_user;
          } else if (this.user_dashboard_data[user].role == 'seller') {
            ++this.seller_user;
          } else if (this.user_dashboard_data[user].role == 'buyer') {
            ++this.buyer_user;
          }
          ++this.total_user;
        }
      }, 
      (error: any) => {
        // Added type annotation for error parameter
        console.log("My error", error);
      }
    );
  }

  adminProductDashboardData(): void {
    // Added return type to method to satisfy strict mode
    this.adminService.productDashboardData().subscribe(
      (data: any) => {
        // Added type annotation for data parameter
        this.product_dashboard_data = data;
        console.log(this.product_dashboard_data);

        for (const status in this.product_dashboard_data) {
          // Fixed missing 'const' declaration for status variable
          // console.log(this.product_dashboard_data[status].status);
          if (this.product_dashboard_data[status].status == 'publish') {
            ++this.publish_product;
          } else if (this.product_dashboard_data[status].status == 'inactive') {
            ++this.inactive_product;
          } else if (this.product_dashboard_data[status].status == 'draft') {
            ++this.draft_product;
          }
          ++this.total_product;
        }
      }, 
      (error: any) => {
        // Added type annotation for error parameter
        console.log("My error", error);
      }
    );
  }
}