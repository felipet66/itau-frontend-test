import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, map } from 'rxjs';

export interface IBusiness {
  id: number;
  name: string;
  business: string;
  valuation: string;
  active: boolean;
  cep: string;
  cnpj: string;
}

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  private apiUrl = 'https://antlia-mockapi.azurewebsites.net/api/v1/itau_teste';
  private businesses: IBusiness[] = [];

  constructor(private http: HttpClient) {}

  getBusinesses(): Observable<IBusiness[]> {
    return this.http.get<IBusiness[]>(this.apiUrl);
  }

  deleteBusiness(id: number): Observable<void> {
    return of(undefined);
  }

  getBusinessById(id: number): Observable<IBusiness | undefined> {
    return this.getBusinesses().pipe(
      map((businesses: IBusiness[]) => businesses.find((b: IBusiness) => b.id === id))
    );
  }
}
