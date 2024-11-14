import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isJoyasVisible: boolean = false;
  isPersonalizarVisible: boolean = false;

  showJoyas(): boolean {
    if (this.isJoyasVisible == true) {
      this.isJoyasVisible = false;
    } else {
      this.isJoyasVisible = true;
      this.isPersonalizarVisible = false;
    }
    return this.isJoyasVisible;
  }


  showPersonalizar(): boolean {
    if (this.isPersonalizarVisible == true) {
      this.isPersonalizarVisible = false;
    }
    else {
      this.isPersonalizarVisible = true;
      this.isJoyasVisible = false;
    }
    return this.isPersonalizarVisible;
  }


  closeList():void{
    this.isJoyasVisible=false;
    this.isPersonalizarVisible= false;
  }
}
