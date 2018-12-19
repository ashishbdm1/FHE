import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadHeaderMenu = 'lesson';

  onNavigate(headerMenu: string){
    this.loadHeaderMenu = headerMenu;

  }
}
