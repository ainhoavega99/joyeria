import { Component } from '@angular/core';
import { NzorroModule } from '../../nzorro.module';

@Component({
  selector: 'app-modal-producto',
  standalone: true,
  imports: [NzorroModule],
  templateUrl: './modal-producto.component.html',
  styleUrl: './modal-producto.component.scss'
})
export class ModalProductoComponent {
  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
