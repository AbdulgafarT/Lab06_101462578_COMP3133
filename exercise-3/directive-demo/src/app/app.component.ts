import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFormatDirective } from './input-format.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, InputFormatDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formattedText: string = '';
}
