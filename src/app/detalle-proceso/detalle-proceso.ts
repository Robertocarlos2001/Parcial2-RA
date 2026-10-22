
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalle-proceso',
  imports: [RouterLink],
  templateUrl: './detalle-proceso.html',
  styleUrl: './detalle-proceso.css',
})
export class DetalleProceso {

  proceso: string = '';

  constructor(private route: ActivatedRoute) {
    this.proceso = this.route.snapshot.params['proceso'];
  }

}
