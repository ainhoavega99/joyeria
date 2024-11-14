import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterModule } from '@angular/router';
import { SeccionesComponent } from './secciones/secciones.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { ProductoComponent } from "../producto/producto.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [NavbarComponent, RouterModule, SeccionesComponent, FavoritosComponent, ProductoComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class IndexComponent {
items=[1,2,3,4];


}
