import { Component } from '@angular/core';

@Component({
  selector: 'app-co-timebox',
  standalone: true,
  imports: [],
  templateUrl: './co-timebox.component.html',
  styleUrl: './co-timebox.component.css'
})
export class CoTimeboxComponent {

  public add_braindump_list(inputEvent:any){
    console.log("Hello");
  }
}
