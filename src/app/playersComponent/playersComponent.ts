import { Component, signal } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { infoJugadores } from "../common/datos/infoJugadores";
import { MediaComponent } from '../mediaComponent/mediaComponent';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, RouterLink, MediaComponent],
  templateUrl: './playersComponent.html',
  styleUrl: './playersComponent.css'
})
export class PlayersComponent {
  protected readonly title = signal('CODEA-Producto1');
  // expose the players list to the template
  readonly players = infoJugadores;
  constructor() {
    console.log('PlayersComponent initialized with title:', this.title());
  }
}