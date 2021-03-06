import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AdproductComponent } from './adproduct/adproduct.component';


const routes: Routes = [{path:'home', component:HomeComponent},
{path:'products', component:ProductsComponent},
{path:'adproduct',component:AdproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
