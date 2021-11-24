import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {ServerModel} from '../server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  @ViewChild('newServerContent', {static: true}) newServerContent: ElementRef;
  @Output() serverCockpit = new EventEmitter<ServerModel>()
  @Output() blueprintCockpit= new EventEmitter<ServerModel>()

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverName: HTMLInputElement) {
    this.serverCockpit.emit({
      type: 'server',
      name: serverName.value,
      content: this.newServerContent.nativeElement.value
    });
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.blueprintCockpit.emit({
      type: 'blueprint',
      name: serverName.value,
      content: this.newServerContent.nativeElement.value
    });
  }

}
