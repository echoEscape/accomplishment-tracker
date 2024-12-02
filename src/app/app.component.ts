import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { CoMainComponent } from './co-main/co-main.component';


@Component({
    selector: 'app-root',
    imports: [CommonModule, RouterOutlet, NavigationComponent, CoMainComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'accomplishment-tracker';
}
