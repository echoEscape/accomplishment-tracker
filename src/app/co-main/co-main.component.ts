import { Component } from '@angular/core';
import { CoTimeboxComponent } from '../co-timebox/co-timebox.component';

@Component({
  selector: 'app-co-main',
  standalone: true,
  imports: [CoTimeboxComponent],
  templateUrl: './co-main.component.html',
  styleUrl: './co-main.component.css'
})
export class CoMainComponent {

}
