import { AccountsService } from './../services/accounts.service';
import { LoggingService } from './../services/logging.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private logService:LoggingService,private acctSrvc: AccountsService) {
      
  }

  onSetTo(status: string) {
    this.acctSrvc.onStatusChanged(this.id,status);
    this.logService.logStatus(status);
  }
}
