import { Component, Input, OnInit } from '@angular/core';
import IPelicula from '../contenido/pelicula.interface';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() movie : IPelicula = {
    imgUrl: '',
    title: '',
    year: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
