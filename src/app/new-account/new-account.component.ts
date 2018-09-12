import { AccountsService } from './../services/accounts.service';
import { LoggingService } from './../services/logging.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private logService:LoggingService,private acctSrvc:AccountsService) {
      
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.acctSrvc.onAccountAdded(accountName,accountStatus);
    this.logService.logStatus(accountStatus);
  }
}
