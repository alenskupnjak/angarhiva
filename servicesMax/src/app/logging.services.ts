
export class LoggingServices {
constructor() {}

 logstatusChange(status: string){
  console.log('A server status changed, new status: ' + status);
 }

}
