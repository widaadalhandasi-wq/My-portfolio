import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  // *ngIf
  Username:string="Widaad"
 isLoggedIn:boolean=false

 toggleLogin(): void {
    this.isLoggedIn = !this.isLoggedIn;
  }
  // *ngFor
  skills:string[]=[ "Angular", 'TypeScript', 'HTML','CSS']
// *ngSwitch
  userRole: string = 'admin';
}
