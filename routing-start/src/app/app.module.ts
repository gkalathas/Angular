import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoute: Routes = [
  {path: '', component: HomeComponent},
  {path: 'servers', component: ServersComponent, children: [
      {path: ':id/edit', component: EditServerComponent},
      {path: ':id', component: ServerComponent},
    ]},

  {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent},
    ]},


];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
