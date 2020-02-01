import { Component, OnInit } from '@angular/core';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  GitHubIcon = faGithub;
  externalLinkIcon = faExternalLinkAlt;

  constructor() {}

  ngOnInit() {}
}
