import { Component, Input } from '@angular/core';

@Component({
  selector: 'super-boton',
  templateUrl: './super-boton.component.html',
  styleUrls: ['./super-boton.component.css']
})
export class SuperBotonComponent {
@Input() color:string='grey';
@Input() texto:string='Lorem Ipsum';
}
