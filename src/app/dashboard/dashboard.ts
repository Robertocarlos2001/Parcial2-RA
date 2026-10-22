
import { Component } from '@angular/core';
import { ItemList } from '../item-list/item-list';
import { ItemDetail } from '../item-detail/item-detail';
import { AnimeService } from '../servicios/anime';

@Component({
  selector: 'app-dashboard',
  imports: [ItemList, ItemDetail],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  elementos: any[] = [];

  elementoSeleccionado: any = null;

  constructor(private animeService: AnimeService) {
    this.elementos = this.animeService.obtenerAnimes();
  }

  seleccionarElemento(elemento: any) {
    this.elementoSeleccionado = elemento;
  }
}
