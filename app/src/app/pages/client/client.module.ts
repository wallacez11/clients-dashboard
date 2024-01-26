import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { MatInputModule,   MatTableModule } from "@angular/material";
import { ClientComponent } from './client.component';
import { ClientService } from 'src/app/services/client.service';
import {MatCardModule} from '@angular/material/card';

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
   
    MatTableModule,
    MatInputModule,
    MatCardModule
    
  ]
})
export class ClientModule {}
