import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: 'contador.component.html'
})

export class ContadorComponent {
  title: string = 'Contador';
  numero: number = 10;
  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
}