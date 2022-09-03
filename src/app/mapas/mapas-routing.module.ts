import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { ZoonRangeComponent } from './pages/zoon-range/zoon-range.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{
  path:'',
  children:[
    {path:'', component:FullScreenComponent},
    {path:'zoon-range', component:ZoonRangeComponent},
    {path:'marcadores', component:MarcadoresComponent},
    {path:'propiedades', component:PropiedadesComponent},
    {path:'**', redirectTo:'fullscreen'}
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapasRoutingModule { }
