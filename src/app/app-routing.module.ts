import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductGridComponent } from './pages/product-grid/product-grid.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'products', component: ProductGridComponent
  },
  {
    path: 'singleProduct', component: SingleProductComponent
  },
  {
    path: 'contactUs', component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
