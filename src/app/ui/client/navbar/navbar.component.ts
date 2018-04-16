import {Component, Injectable, OnInit} from '@angular/core';
import {PageService} from '../../../shared/page.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
public pageName: any = '';
  constructor() {
  }
  ngOnInit() {
  }

}
