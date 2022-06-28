import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Desafio-2';
  filterstudents = '';
  students = [
    {
      name: 'alvaro',
      score: 9,
      rut: 12345678
    },
    {
      name: 'daniela',
      score: 6,
      rut: 12345679
    },
    {
      name: 'alexys',
      score: 2,
      rut: 12345670
    },
    {
      name: 'rafael',
      score: 7,
      rut: 12345671
    },
    {
      name: 'alejandra',
      score: 8,
      rut: 12345672
    },
    {
      name: 'sofia',
      score: 9,
      rut: 12345673
    }
  ];
}
