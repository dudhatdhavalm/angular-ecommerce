import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

// Admin before login check
@Injectable({
  providedIn: "root"
})
export class AdminAuthGuardLogin implements CanActivate {
  constructor(private router: Router) { }
  
  // Updated to use explicit return type for better type safety in Angular 12
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const role = sessionStorage.getItem("role");
    if (role == "admin") {
      this.router.navigate(["/admin-dashboard"]);
      return false;
    } else {
      return true;
    }
  }
}

// Admin after login check
@Injectable({
  providedIn: 'root'
})
export class AdminAuthGaurdService implements CanActivate { // Added CanActivate interface implementation
  constructor(private router: Router) { }
  
  // Updated to use explicit return type for better type safety in Angular 12
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const role = sessionStorage.getItem("role");
    if (role == 'admin') {
      return true;
    } else {
      this.router.navigate(["/admin-login"]);
      return false;
    }
  }
}

// Customer(Buyer & Seller) before login
@Injectable({
  providedIn: "root"
})
export class SellerBuyerAuthGuardLogin implements CanActivate {
  constructor(private router: Router) { }
  
  // Updated to use explicit return type for better type safety in Angular 12
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const role = sessionStorage.getItem("role");
    if (role == "seller") {
      this.router.navigate(["/seller-dashboard"]);
      return false;
    } else if (role == "buyer") {
      this.router.navigate(["/buyer-dashboard"]);
      return false;
    } else {
      return true;
    }
  }
}

// Seller(Customer) after login
@Injectable({
  providedIn: 'root'
})
export class SellerAuthGaurdService implements CanActivate { // Added CanActivate interface implementation
  constructor(private router: Router) { }
  
  // Updated to use explicit return type for better type safety in Angular 12
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const role = sessionStorage.getItem("role");
    if (role == 'seller') {
      return true;
    } else {
      this.router.navigate(["/sign-in"]);
      return false;
    }
  }
}

// Buyer(Customer) after login
@Injectable({
  providedIn: 'root'
})
export class BuyerAuthGaurdService implements CanActivate { // Added CanActivate interface implementation
  constructor(private router: Router) { }
  
  // Updated to use explicit return type for better type safety in Angular 12
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const role = sessionStorage.getItem("role");
    if (role == 'buyer') {
      return true;
    } else {
      this.router.navigate(["/sign-in"]);
      return false;
    }
  }
}