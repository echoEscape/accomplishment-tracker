import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  //templateUrl: './app.component.html',
  template: `<app-header></app-header>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'accomplishment-tracker';
}
