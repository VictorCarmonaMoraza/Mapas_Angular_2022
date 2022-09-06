import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.css']
})
export class MarcadoresComponent implements OnInit, AfterViewInit {

  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  @ViewChild('mapa') divMapa!: ElementRef;
  center: [number, number] = [-6.0761996, 37.41285254336611]

  constructor() { }
  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.center,
      zoom: this.zoomLevel
    });

    const markerHtml:HTMLElement = document.createElement('div');
    markerHtml.innerHTML = 'Hola mundo este es un buen lugar';

    //agregamos un marcador
     new mapboxgl.Marker({
      element:markerHtml
     })
      .setLngLat(this.center)
      .addTo(this.mapa)

  }

  ngOnInit(): void {
  }

}
