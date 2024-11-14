import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { JoyasComponent } from './joyas/joyas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PersonalizacionComponent } from './personalizacion/personalizacion.component';
import { WhislistComponent } from './whislist/whislist.component';
import { CarritoComponent } from './carrito/carrito.component';
import { UserComponent } from './user/user.component';


export const routes: Routes = [
    { path: '', component: IndexComponent},
    { path: 'contacto', component: ContactoComponent },
    { path: 'joyas', component: JoyasComponent },
    { path: 'personalizacion', component: PersonalizacionComponent },
    { path: 'whislist', component: WhislistComponent },
    { path: 'user', component: UserComponent },
    { path: 'carrito', component: CarritoComponent },
    
];
