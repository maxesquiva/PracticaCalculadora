import { Component } from '@angular/core';
import { Result } from './result';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Datos de entrada
  name = '';
  gender = '';
  weight = 0;
  height = 0;
  message: Result;

  // Listado de resultados
  results: Result[] = [];

  // Método para calcular el IMC y añadir un nuevo resultado a la lista
  
  calculate() {
    // Cálculo del IMC
    const imc = this.weight / (this.height/100 * this.height/100);

    if (!this.name || !this.gender || this.height === 0 || this.weight === 0) {
      return;
    }
    // Mensaje según el IMC
    let message = '';
    if (imc < 18.5) {
      message = 'Por debajo del peso ideal';
    } else if (imc < 25) {
      message = 'Peso ideal';
    } else {
      message = 'Por encima del peso ideal';
    }

    // Creación del nuevo resultado
    const result: Result = {
      name: this.name,
      gender: this.gender,
      weight: this.weight,
      height: this.height,
      imc: imc,
      message: message
    };

    // Añadir el nuevo resultado a la lista
    this.results.push(result);
    this.message = this.results[this.results.length - 1];
    
    this.clear();
  }

  // Método para vaciar el formulario
  clear() {
    this.name = '';
    this.gender = '';
    this.weight = 0;
    this.height = 0;
  }

  // Método para aumentar o disminuir el peso o altura
  adjust(value: string, type: string) {
    if (type === 'weight') {
      if (value === '+') {
        this.weight++;
      } else if(this.weight>0){
        this.weight--;
      }
    } else {
      if (value === '+') {
        this.height++;
      } else if(this.height>0){
        this.height--;
      }
    }
  }
}
