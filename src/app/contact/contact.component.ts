import { Component, OnInit } from '@angular/core';
import { developers } from '../constants/developers';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public developers = developers;

  constructor() {}

  ngOnInit() {}
}
