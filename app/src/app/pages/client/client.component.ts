import { Component, OnInit } from "@angular/core";
import { ClientService } from "../../services/client.service";
import {  MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from "../dialog/dialog.component";


export interface clients {
  id: string;
  name: number;
  imagem: number;
  empreendimentos: number
}

const ELEMENT_DATA: clients[] = [
];
export class TableBasicExample {
  displayedColumns: string[] = ['id', 'name', 'imagem', 'empreendimentos'];
  dataSource = [];
}

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})


export class ClientComponent implements OnInit {
  dataSource = new MatTableDataSource<clients>([]);
  rawData;
  displayedColumns: string[] = ['id', 'name', 'imagem', 'empreendimentos'];
  totalClientes: number;
  totalEmpreendimentos: number;

  constructor(private clientService: ClientService, public dialog: MatDialog) {}

  ngOnInit() {
    this.loadClients();
    this.loadTotals()
  }

  openDialog(row): void {
    
    const client = this.rawData.find(item => item._id === row.id && item.enterprises !==null);
    console.log(client.enterprises)
    const dialogRef = this.dialog.open(DialogComponent, {
      data: client.enterprises
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  loadClients() {
    this.clientService.getAll().subscribe((data) => {
      this.rawData = data
      data.forEach((item) => {
        const enterprises = item.enterprises || [];
        const convertedData: clients = {
          id: item._id || '',
          name: item.name || '',
          imagem: item.image_src || '',
          empreendimentos: enterprises.length

        };
        ELEMENT_DATA.push(convertedData);
      });
      this.dataSource = new MatTableDataSource(ELEMENT_DATA)

    });
  }

  loadTotals() {
    this.clientService.getGeneralTotals().subscribe(
      (total) => {
        console.log(total)
        this.totalClientes = total.clientes;
        this.totalEmpreendimentos = total.empreendimentos;
      },
      (error) => {
        console.error('Erro ao obter totais:', error);
      }
    );
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }
}