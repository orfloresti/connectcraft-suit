import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WhoisService {

  constructor(
    private http: HttpClient,
  ) { }

  lookup(domain: string) {
    return this.http.get(`${environment.baseUrl}/whois?url=${domain}`);
  }
}
