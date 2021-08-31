import { Component } from '@angular/core';
import { WhoisService } from '../services/whois.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data: string;
  domain: string;
  loading: boolean;

  constructor(
    private whois: WhoisService
  ) {
    this.loading = false;
    this.data = '';
  }

  onSearch(domain: string) {
    this.domain = domain;
    this.loading = true;
    this.whois.lookup(domain).subscribe(
      (resp: any) => {
        this.data = resp.data;
        this.loading = false;
      },(error) =>{
        this.data = 'Lo siento hubo un error al buscar la información \n\n';
        this.loading = false;
      });

  }

  clearData() {
    this.data = '';
  }

}
