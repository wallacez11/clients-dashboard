import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { MatTableModule, } from "@angular/material";
import { ClientComponent } from './client.component';
import { ClientService } from 'src/app/services/client.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

export const ClientRoutes: Routes = [
  {
    path: 'client',
    component: ClientComponent
  }
];

@NgModule({
  declarations: [ClientComponent],
  providers: [ClientService],
  entryComponents: [DialogComponent],
  imports: [
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule

  ]

})
export class ClientModule { }
