import {Component, ContentChild, ElementRef, Input, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('elementAlias') element: {type: string, name: string, content: string};
  @ContentChild('contentParagraph') contentElem: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log(`NgOnInit contentElem => ${this.contentElem} `);
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit contentElem => ${this.contentElem.nativeElement.textContent} `);
  }

}
