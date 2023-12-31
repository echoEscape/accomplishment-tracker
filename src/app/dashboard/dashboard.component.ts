import { Component } from '@angular/core';
import { ModuleTimeblocksComponent } from '../module-timeblocks/module-timeblocks.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ModuleTimeblocksComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {

}
