import { Component, OnInit } from '@angular/core';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.css']
})
export class PaginacionComponent implements OnInit {

  numbers = [1,2,3,4,5,6,7,8,9,10]
  faAngleDoubleLeft = faAngleDoubleLeft
  faAngleDoubleRight = faAngleDoubleRight

  constructor() { }

  ngOnInit(): void {
  }

}
