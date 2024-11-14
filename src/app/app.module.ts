import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoyasModule } from './joyas/joyas.module';
import { ContactoModule } from './contacto/contacto.module';
import { PersonalizacionModule } from './personalizacion/personalizacion.module';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';




@NgModule({
  declarations: [],
  imports: [
    IndexComponent,
    UserComponent,
    CommonModule,
    JoyasModule,
    ContactoModule,
    PersonalizacionModule,
    RouterModule,
  ],
})
export class AppModule { }
