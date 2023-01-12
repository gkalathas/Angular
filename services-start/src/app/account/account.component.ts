import { Component, Input } from '@angular/core';
import {LoggingService} from "../logging.service";
import {AccountService} from "../accountService";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {


  constructor( private accountService: AccountService) {
  }


  @Input() account: {name: string, status: string};
  @Input() id: number;



  onSetTo(status: string) {
    this.accountService.onStatusChanged(this.id, status);
    this.accountService.accountStatus.emit(status);

  }
}
