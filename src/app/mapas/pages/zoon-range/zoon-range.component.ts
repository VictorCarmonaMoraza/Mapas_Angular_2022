import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoon-range',
  templateUrl: './zoon-range.component.html',
  styleUrls: ['./zoon-range.component.css']
})
export class ZoonRangeComponent implements AfterViewInit, OnDestroy {

  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;

  @ViewChild('mapa') divMapa!: ElementRef

  center: [number, number] = [-6.0761996, 37.41285254336611]

  constructor() {
    //console.log('constructor',this.divMapa)

  }

  ngOnDestroy(): void {
    //Destruimos los listenmer para que toda la instancia se cree de nuevo
    this.mapa.off('zoom', ()=>{});
    this.mapa.off('zoomend', ()=>{});
    this.mapa.off('move', ()=>{});
  }
  //Se ejecuta despues de que la vista ha sido inicializado
  ngAfterViewInit(): void {

    console.log('after', this.divMapa);

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.center,
      zoom: this.zoomLevel
    });

    //implementar un listener para ver cuando el zoom cambia
    this.mapa.on('zoom', (ev) => {
      // console.log('zoom Prueba');
      // console.log('Evento obtenido',ev);
      //const zoomActual = this.mapa.getZoom();
      this.zoomLevel = this.mapa.getZoom();
      //console.log(zoomActual);
    });

    //si nos pasamos el zoom a mas de 18 lo establcemos en 18
    this.mapa.on('zoomend', (ev) => {
      if (this.mapa.getZoom() > 18) {
        //Ir al zoom en 18
        this.mapa.zoomTo(18);
      }
    });

    //Movimineto del mapa
    this.mapa.on('move', (event)=>{
      const target = event.target;
      //Desestructuro la longitud y latitud que viene del target.getCenter
      const {lng, lat} = target.getCenter();
      this.center=[lng,lat];

      // target.getCenter;
      // console.log(event);
      // console.log(target.getCenter())
    })
  }

  zoomOut() {
    //console.log('zoom Out', this.divMapa);
    this.mapa.zoomOut();


  }

  zoomIn() {
    //console.log('zoom Out');
    this.mapa.zoomIn();


  }

  zoomCambio(valor: string) {
    console.log(valor);
    this.mapa.zoomTo(Number(valor));
  }

}
