import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserCrudComponent } from './user-crud/user-crud.component';

// No changes needed for this file as it doesn't contain any ModuleWithProviders
// that would need generic type parameters for Angular 12 compatibility.
// The module structure is already compatible with Angular 12.

@NgModule({
  declarations: [AdminLoginComponent, AdminDashboardComponent, UserCrudComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }