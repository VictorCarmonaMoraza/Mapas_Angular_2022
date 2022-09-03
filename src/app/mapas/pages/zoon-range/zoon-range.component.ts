import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoon-range',
  templateUrl: './zoon-range.component.html',
  styleUrls: ['./zoon-range.component.css']
})
export class ZoonRangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const map = new mapboxgl.Map({
      container: 'mapa', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center:[-6.0761996, 37.41285254336611],
      zoom:15
    });
  }

}
