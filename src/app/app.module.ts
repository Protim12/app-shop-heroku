import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsComponent } from './components/products/products.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ProductGridComponent } from './pages/product-grid/product-grid.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    SingleProductComponent,
    FooterComponent,
    ContactUsComponent,
    ProductGridComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
