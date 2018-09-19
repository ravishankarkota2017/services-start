//A service does not need any decorator
export class LoggingService{
    logStatus(newStatus:string):void{
        console.log('A server status changed, new status: ' + newStatus);
    }
    logNewServerAddition(accountName:string):void{
        console.log('A new server namely '+ accountName +' is added.');
    }
}