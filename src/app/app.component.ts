import { AccountsService } from './services/accounts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountsService]
})
export class AppComponent implements OnInit{

  accounts:{name:string,status:string}[];

  constructor(private acctService:AccountsService) {
      
  }
  
  ngOnInit(): void {
    this.accounts = this.acctService.accounts;
  }
}
