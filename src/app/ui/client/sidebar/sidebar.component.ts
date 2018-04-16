import { Component, OnInit } from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {PageService} from '../../../shared/page.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [ NavbarComponent]
})
export class SidebarComponent implements OnInit {

  constructor(private navbar: NavbarComponent) {
  }

  ngOnInit() {
  }

  change(name: any) {
    this.navbar.pageName = name;
    console.log('sidebar');
    console.log(this.navbar.pageName);
  }

}
