import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {

  @Output() menuClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  onClick() {
    this.menuClick.emit(true);
  }

}
