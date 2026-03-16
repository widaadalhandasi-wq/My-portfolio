import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Interpolation Binding
Studentname:string="Widaad"

// Property Binding
profileImage:string="https://tse3.mm.bing.net/th/id/OIP.CjGeo5X8IdYulubtlVgTxgHaJH?rs=1&pid=ImgDetMain&o=7&rm=3"
isDisabled: boolean = true;

// <!-- event binding -->
message: string = '';

onButtonClick() {
  this.message = 'Button was clicked!';
}

}
