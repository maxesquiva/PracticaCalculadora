import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperBotonComponent } from './super-boton/super-boton.component';
import { ElementoListaComponent } from './elemento-lista/elemento-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperBotonComponent,
    ElementoListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
