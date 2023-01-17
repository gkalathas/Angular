import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  subscribeParams: Subscription;

  constructor(private serversService: ServersService,
              private  route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    //by adding plus in front of the params converts the param from string to number
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.subscribeParams = this.route.params.subscribe((params:Params) => {
      this.server = this.serversService.getServer(+params['id']);
    })
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'})
  }
}
