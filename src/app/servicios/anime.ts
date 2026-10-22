
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  animes = [
    {
      nombre: 'Naruto',
      categoria: 'Shonen',
      descripcion: 'Naruto busca convertirse en Hokage.',
      estado: 'Finalizado'
    },
    {
      nombre: 'One Piece',
      categoria: 'Aventura',
      descripcion: 'Luffy busca el tesoro One Piece.',
      estado: 'En emisión'
    },
    {
      nombre: 'Attack on Titan',
      categoria: 'Acción',
      descripcion: 'La humanidad lucha contra los titanes.',
      estado: 'Finalizado'
    },
    {
      nombre: 'Demon Slayer',
      categoria: 'Fantasía',
      descripcion: 'Tanjiro lucha contra los demonios.',
      estado: 'Finalizado'
    },
    {
      nombre: 'Dragon Ball Z',
      categoria: 'Acción',
      descripcion: 'Goku protege la Tierra.',
      estado: 'Finalizado'
    }
  ];

  obtenerAnimes() {
    return this.animes;
  }

  agregarAnime(anime: any) {
    this.animes.push(anime);
  }

  modificarAnime(nombre: string, animeModificado: any) {
    const indice = this.animes.findIndex(anime => anime.nombre === nombre);

    if (indice !== -1) {
      this.animes[indice] = animeModificado;
    }
  }

}
