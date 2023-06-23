import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: green;
      }
      .offline {
        color: red;
      }
    `,
  ],
})
export class ServerComponent {
  constructor() {
    setTimeout(() => (this.serverStatus = 'offline'), 2000);
  }

  public serverStatus: string = 'online';
}
