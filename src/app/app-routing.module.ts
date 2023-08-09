import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EngineeringComponent } from './components/engineering/engineering.component';
import { CrewComponent } from './components/crew/crew.component';
import { SuppliesComponent } from './components/supplies/supplies.component';
import { MissionControlComponent } from './components/mission-control/mission-control.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'crew', component: CrewComponent },
  { path: 'engineering', component: EngineeringComponent },
  { path: 'supplies', component: SuppliesComponent },
  { path: 'mission-control', component: MissionControlComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default redirect to the dashboard
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
