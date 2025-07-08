import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// No changes needed for this file as it doesn't contain any ModuleWithProviders methods
// If this module had a static forRoot() method, we would need to add a generic type parameter
// Example: static forRoot(): ModuleWithProviders<CoreModule> { return { ... }; }

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }