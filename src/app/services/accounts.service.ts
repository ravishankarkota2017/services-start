import { LoggingService } from './logging.service';
import { Injectable } from "@angular/core";

@Injectable()
export class AccountsService {

  constructor(private logSrvc:LoggingService) {
      
  }
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
    
      onAccountAdded(name: string, status: string) {
        this.accounts.push({name,status});
        this.logSrvc.logNewServerAddition(name);
        this.logSrvc.logStatus(status);
      }
    
      onStatusChanged(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.logSrvc.logStatus(newStatus);
      }
}   