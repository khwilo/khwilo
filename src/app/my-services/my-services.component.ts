import { Component, OnInit } from '@angular/core';

import {
  faAngular,
  faCss3,
  faHtml5,
  faJs,
  faNodeJs
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.css']
})
export class MyServicesComponent implements OnInit {
  HTMLIcon = faHtml5;
  CSS3Icon = faCss3;
  JSIcon = faJs;
  AngularIcon = faAngular;
  NodeJSIcon = faNodeJs;
  databaseIcon = faDatabase;

  constructor() {}

  ngOnInit() {}
}
