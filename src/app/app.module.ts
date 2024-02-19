import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeroComponent } from './Components/hero/hero.component';
import { HomeComponent } from './Pages/home/home.component';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { ZonesComponent } from './Pages/zones/zones.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { AboutComponent } from './Pages/about/about.component';
import { ZoneCardComponent } from './Components/zone-card/zone-card.component';
import { ArticleCardComponent } from './Components/article-card/article-card.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './Pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    HomeComponent,
    CategoriesComponent,
    ZonesComponent,
    ContactComponent,
    AboutComponent,
    ZoneCardComponent,
    ArticleCardComponent,
    RegisterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
