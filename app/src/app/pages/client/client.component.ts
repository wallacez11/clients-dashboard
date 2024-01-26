import { Component, OnInit } from "@angular/core";
import { ClientService } from "../../services/client.service";
import { MatTableDataSource } from '@angular/material';
import {MatCardModule} from '@angular/material/card';

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
  dataSource;
  displayedColumns: string[] = ['id', 'name', 'imagem', 'empreendimentos'];


  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getAll().subscribe((data) => {
      
      data.forEach((item) => {
        const enterprises = item.enterprises || [];
        const convertedData: clients = {
          id: item._id || '',
          name: item.name || '',
          imagem: item.image_src || '',
          empreendimentos: enterprises.reduce((sum, enterprise) => sum + parseInt(enterprise.realties || '0', 10), 0)

        };
  
        console.log("teste", item.name); // Example of using optional chaining
        ELEMENT_DATA.push(convertedData);
      });
      this.dataSource = new MatTableDataSource(ELEMENT_DATA)

    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }
}
