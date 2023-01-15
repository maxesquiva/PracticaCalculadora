import { Component, Input } from '@angular/core';
import { Result } from '../result';

@Component({
  selector: 'app-elemento-lista',
  templateUrl: './elemento-lista.component.html',
  styleUrls: ['./elemento-lista.component.css']
})
export class ElementoListaComponent {
  @Input() result: Result;
}
