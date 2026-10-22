import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-list',
  imports: [],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css',
})
export class ItemList {

  @Input() elementos: any[] = [];

  @Output() elementoSeleccionado = new EventEmitter<any>();

  seleccionar(elemento: any) {
    this.elementoSeleccionado.emit(elemento);
  }
} 