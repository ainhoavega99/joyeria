import { Component } from '@angular/core';
import { NzorroModule } from '../nzorro.module';
import { ModalProductoComponent } from './modal-producto/modal-producto.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [NzorroModule, CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {

  constructor(private modal: NzModalService) { }

  openModal(): void {
    this.modal.create({
      nzTitle: 'Título del Modal',
      nzContent: ModalProductoComponent,
      nzFooter: null
    });
  }
}
