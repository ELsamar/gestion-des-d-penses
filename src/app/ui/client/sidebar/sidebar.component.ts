import { Component, OnInit , Input } from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {PageService} from '../../../shared/page.service';
declare const $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [ NavbarComponent]
})
export class SidebarComponent implements OnInit {

  @Input() show: true;
  menuItems: any[];

  constructor() { }

  ngOnInit() {
  }
    
}
