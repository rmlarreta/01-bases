import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: 'listado.component.html'
})

export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Hulk', 'Ironman', 'Superman'];
  heroeborrado: string = '';

  borrarHeroe() {
    this.heroeborrado = this.heroes.splice(0, 1).toString() || '';
  }
}