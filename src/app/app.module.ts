import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './Admin/layout/layout.component';
import { LoginComponent } from './Admin/login/login.component';
import { OrderComponent } from './Admin/order/order.component';
import { ProductsComponent } from './Admin/products/products.component';
import { CustomersComponent } from './Admin/customers/customers.component';
import { CategoriesComponent } from './Admin/categories/categories.component';
import { LandingPageComponent } from './Website/landing-page/landing-page.component';
import { ProductcategoriesComponent } from './Website/productcategories/productcategories.component';
import { CustomercartsComponent } from './Website/customercarts/customercarts.component';
import { CheckoutsComponent } from './Website/checkouts/checkouts.component';
import { CustomerordersComponent } from './Website/customerorders/customerorders.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListProductsComponent } from './Website/list-products/list-products.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    OrderComponent,
    ProductsComponent,
    CustomersComponent,
    CategoriesComponent,
    LandingPageComponent,
    ProductcategoriesComponent,
    CustomercartsComponent,
    CheckoutsComponent,
    CustomerordersComponent,
    ListProductsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),FormsModule,HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
