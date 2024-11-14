import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoyasComponent } from './joyas.component';



@NgModule({
  declarations: [JoyasComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    JoyasComponent
  ]
})
export class JoyasModule { }
