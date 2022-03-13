import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  // personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: '',
    poder: 0 
  }

  /*agregarNuevoPersonaje( arg: Personaje) {
    this.personajes.push(arg);
  }*/

  constructor() { }

}
