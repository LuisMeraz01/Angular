import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  nombre = '';
  apellido = '';
  edad = 40;
  sueldos = [1700, 1600, 1900]; // Seccion de directivas y condiciones

  contador = 1; // Seccion para funciones y eventos

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }


}
