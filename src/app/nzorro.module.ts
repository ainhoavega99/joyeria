import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzCardModule,
    NzModalModule
  ], exports:[
    NzCardModule,
    NzButtonModule,
    NzModalModule
  ]
})
export class NzorroModule { }
