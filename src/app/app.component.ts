import {Component} from '@angular/core';
import {ServerModel} from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'name test', content: 'just a content'}];

 onServerAdded(server: ServerModel) {
   console.log(server);
    this.serverElements.push(server);
  }

  onBlueprintAdded(blueprint: ServerModel) {
    this.serverElements.push(blueprint);
  }

}
