import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoon-range',
  templateUrl: './zoon-range.component.html',
  styleUrls: ['./zoon-range.component.css']
})
export class ZoonRangeComponent implements AfterViewInit {

mapa!:mapboxgl.Map;

@ViewChild('mapa') divMapa!:ElementRef

  constructor() {
    //console.log('constructor',this.divMapa)

  }
  //Se ejecuta despues de que la vista ha sido inicializado
  ngAfterViewInit(): void {

    console.log('after',this.divMapa);

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center:[-6.0761996, 37.41285254336611],
      zoom:15
    });
  }

  zoomOut(){
    console.log('zoom Out', this.divMapa);
    this.mapa.zoomOut();
  }

  zoomIn(){
    console.log('zoom Out');
    this.mapa.zoomIn();
  }

}
