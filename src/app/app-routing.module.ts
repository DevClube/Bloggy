import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { ZonesComponent } from './Pages/zones/zones.component';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { RegisterComponent } from './Pages/register/register.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Categories', component: CategoriesComponent },
  { path: 'Zones', component: ZonesComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Register', component: RegisterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
