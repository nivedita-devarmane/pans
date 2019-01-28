import { LoggingService } from "./logging.service";
import { Injectable } from "@angular/core";
@Injectable()
export class DbconService {
    /*Injecting LoggicService object into dbcon service*/ 
  constructor(private log: LoggingService) { }
  dbconnect() {
    console.log("DataBase Service...");
    this.log.logMessage();
  }
}
