import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class ClientService {
  private apiUrl = "http://localhost:3000/clients";

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    
    return this.http.get<any>(`${this.apiUrl}`);
  }

  getById() {}

  getByName() {}

  getGeneralTotals() {}

  getTotalsByCompany() {}
}
