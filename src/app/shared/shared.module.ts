import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageNotFoundErrorComponent } from './layouts/page-not-found-error/page-not-found-error.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NumberOnlyDirective } from './directives/number-only.directive';

// No changes needed for this file as it doesn't contain any ModuleWithProviders methods
// Angular 12 upgrade would require adding generic type parameters to any ModuleWithProviders returns
// Example: static forRoot(): ModuleWithProviders<SharedModule> { return { ... }; }

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundErrorComponent,
    NumberOnlyDirective
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TranslateModule,
    NumberOnlyDirective
  ]
})
export class SharedModule { }