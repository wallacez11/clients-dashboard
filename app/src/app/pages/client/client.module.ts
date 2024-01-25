import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule } from "@angular/material";
import { ClientComponent } from './client.component';
import { ClientService } from 'src/app/services/client.service';

export const ClientRoutes: Routes = [
  {
    path: 'client',
    component: ClientComponent
  }
];

@NgModule({
  declarations: [ClientComponent],
  providers: [ClientService],
  imports: [
    MatTableModule
  ]
})
export class ClientModule {}
