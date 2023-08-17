// Angular

import { Component } from '@angular/core';

@Component({
  selector: 'iframe-bot',

  templateUrl: './cb.component.html',

  styleUrls: ['./cb.component.scss'],
})
export class IframeBotComponent {
  showChat = false;

  toggleChat() {
    this.showChat = !this.showChat;
  }
}
