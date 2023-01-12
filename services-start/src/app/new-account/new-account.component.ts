import { Component, EventEmitter, Output } from '@angular/core';
import {LoggingService} from "../logging.service";
import {AccountService} from "../accountService";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();


  constructor( private accountService:AccountService) {
    this.accountService.accountStatus.subscribe(
      (status:string) => alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {

    this.accountService.onAccountAdded(accountName, accountStatus);

  }
}
