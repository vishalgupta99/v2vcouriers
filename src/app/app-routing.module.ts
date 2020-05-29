import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TrackComponent } from './track/track.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'track', component:TrackComponent},
  {path: 'home', component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutComponent,TrackComponent,HomeComponent];
