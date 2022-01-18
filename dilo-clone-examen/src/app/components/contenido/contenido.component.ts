import { Component, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import IPelicula from './pelicula.interface';
import peliculas from './pelis';
@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})


export class ContenidoComponent implements OnInit {
  
  faAngleDown = faAngleDown
  peliculas : IPelicula[] = peliculas
  
  movie : IPelicula = {title: '',imgUrl: '', year: ''}
  constructor() { }

  ngOnInit(): void {
  }

}
