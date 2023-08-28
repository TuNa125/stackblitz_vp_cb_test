import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
    selector: 'iframe-bot',
    templateUrl: './cb.component.html',
    styleUrls: ['./cb.component.scss']
})



export class IframeBotComponent {

  iframeOpened = false;
  showChat = false;
  isDragging= false;

  toggleChat() {
    if (this.isDragging) {
      this.isDragging = false;
      return
    }
    this.showChat = !this.showChat;
    this.iframeOpened = true;
  }

  closeChat() {
    this.showChat = false;
    this.iframeOpened = false;
  }

  handleDragStart(event: CdkDragEnd): void {
    this.isDragging = true;
  }
}
