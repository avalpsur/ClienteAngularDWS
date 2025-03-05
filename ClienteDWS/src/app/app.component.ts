import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';

@Component({
  selector: 'app-root',
  imports: [ListaClientesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ClienteDWS';
}
