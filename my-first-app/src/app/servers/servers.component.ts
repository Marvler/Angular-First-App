import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  public allowNewServer: boolean = false;
  public serverCreationStatus: string = 'No server was created';
  public serverName: string = 'testServer';
  public color: string = 'red';
  servers = ['TestServer', 'TestServer2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    setTimeout(() => {
      this.color = 'green';
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColor() {
    return this.color;
  }
}
