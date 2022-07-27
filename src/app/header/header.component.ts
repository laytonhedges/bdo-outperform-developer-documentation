import { Component, OnInit } from '@angular/core';
import { navBarItems } from '../constants/navbar-items';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public navItems = navBarItems;
  constructor() {}

  ngOnInit() {}
}
