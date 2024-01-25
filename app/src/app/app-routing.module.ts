import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavbarComponent } from "./navigation/navbar.component";
import { EnterpriseRoutes } from "./pages/enterprise/enterprise.module";
import { EnterpriseModule } from "./pages/enterprise/enterprise.module";
import { ClientComponent} from "./pages/client/client.component";
import { EnterpriseComponent} from "./pages/enterprise/enterprise.component";
import { ClientRoutes } from "./pages/client/client.module";

const routes: Routes = [
  {
    path: "",
    component: NavbarComponent,
    children: [...EnterpriseRoutes, ...ClientRoutes],
  },
  { path: 'client', component: ClientComponent },
  { path: 'enterprise', component: EnterpriseComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),EnterpriseModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
