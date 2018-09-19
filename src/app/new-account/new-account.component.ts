import { AccountsService } from './../services/accounts.service';
import { LoggingService } from './../services/logging.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService]
})
export class NewAccountComponent {
   constructor(private logService:LoggingService,private acctSrvc:AccountsService) {
      
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.acctSrvc.onAccountAdded(accountName,accountStatus);
    this.logService.logNewServerAddition(accountName);
    this.logService.logStatus(accountStatus);
  }
}
