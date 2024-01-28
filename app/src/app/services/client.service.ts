import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class ClientService {
  private apiUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {

    return this.http.get<any>(`${this.apiUrl}/clients`);
  }

  getById(enterpriseId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/enterprises/${enterpriseId}`);
  }

  getByName() { }

  getGeneralTotals(): Observable<any> {

    return this.http.get<any>(`${this.apiUrl}/stats`);
  }
  getTotalsByCompany() { }
}
