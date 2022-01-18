import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerNavbarComponent } from './components/banner-navbar/banner-navbar.component';
import { OpcionesComponent } from './components/opciones/opciones.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginacionComponent } from './components/paginacion/paginacion.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuPelisComponent } from './components/menu-pelis/menu-pelis.component';
import { CataloguePageComponent } from './components/catalogue-page/catalogue-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerNavbarComponent,
    OpcionesComponent,
    ContenidoComponent,
    PeliculaComponent,
    FooterComponent,
    PaginacionComponent,
    MenuPelisComponent,
    CataloguePageComponent
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
