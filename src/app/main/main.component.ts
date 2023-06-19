import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ResultsComponent } from '../results/results.component';
import { GeradorService } from '../gerador.service';

@Component({
  standalone: true,
  selector: 'app-main',
  imports: [
    CommonModule,
    ResultsComponent,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  geradorService: GeradorService = inject(GeradorService);
  state: string | undefined;
  cpf: string = "(ง︡'-'︠)ง";
  randomCPF(str: string, event: Event){
    this.state = str;
    event.preventDefault()
    this.cpf = this.geradorService.randomCpf(this.state);
  }
}
