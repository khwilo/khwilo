import { Component, OnInit } from '@angular/core';

import {
  faAngular,
  faCss3,
  faHtml5,
  faJs,
  faNodeJs
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  HTMLIcon = faHtml5;
  CSS3Icon = faCss3;
  JSIcon = faJs;
  Angular = faAngular;
  NodeJS = faNodeJs;

  constructor() {}

  ngOnInit() {}
}
