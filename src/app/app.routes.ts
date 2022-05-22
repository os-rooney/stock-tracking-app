// Imports router dependencies
import {RouterModule, Routes} from "@angular/router";
// Imports App components that are linked to a route
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ManageComponent} from "./components/manage/manage.component";

// Defines a route configuration array
const routes: Routes = [
  {path:'', component: DashboardComponent},
  {path:'manage', component: ManageComponent}
];

// Exports the routes for use
export const AppRoutes = RouterModule.forRoot(routes);
