
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimeService } from '../servicios/anime';

@Component({
  selector: 'app-procesos',
  imports: [RouterLink],
  templateUrl: './procesos.html',
  styleUrl: './procesos.css',
})
export class Procesos {

  elementos: any[] = [];

  constructor(private animeService: AnimeService) {
    this.elementos = this.animeService.obtenerAnimes();
  }

}
