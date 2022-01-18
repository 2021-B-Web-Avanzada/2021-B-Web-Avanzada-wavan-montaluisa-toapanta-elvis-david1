import { Component, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-pelis',
  templateUrl: './menu-pelis.component.html',
  styleUrls: ['./menu-pelis.component.css']
})
export class MenuPelisComponent implements OnInit {

  faAngleDown = faAngleDown;
  opciones = [
    "Todos los formatos",
    "Todos los géneros",
    "Todos los países",
    "Todos los años",
    "Todos los estados"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
