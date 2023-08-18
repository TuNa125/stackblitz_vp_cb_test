import { Component } from '@angular/core';

@Component({
  selector: 'iframe-bot',
  templateUrl: './cb.component.html',
  styleUrls: ['./cb.component.scss'],
})
export class IframeBotComponent {
  iframeOpened = false; // New variable to control initial iframe state
  showChat = false;

  toggleChat() {
    this.showChat = !this.showChat;
    this.iframeOpened = true; // Open the iframe when chat button is clicked
  }

  closeChat() {
    this.showChat = false;
    this.iframeOpened = false; // Close the iframe
  }
}
