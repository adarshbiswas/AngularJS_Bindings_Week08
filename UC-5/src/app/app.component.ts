import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName: string = '';
  
  isValidName(): boolean {
    return /^[A-Z][a-zA-Z]{2,}$/.test(this.userName);
  }
}
