import { Component, OnInit } from "@angular/core";
import { ClientService } from "../../services/client.service";
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {
  dataSource : any[] = [];
  displayedColumns= ["name"];

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getAll().subscribe((data) => {
      console.log(data)
      this.dataSource  = data;
    });
  }
}
