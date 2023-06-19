import { Component } from '@angular/core';
import { MainComponent } from './main/main.component';

@Component({
  standalone: true,
  imports: [MainComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_gerador_cpf';
}
