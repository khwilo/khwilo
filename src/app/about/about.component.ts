import { Component, OnInit } from '@angular/core';

import {
  faGithub,
  faLinkedin,
  faTwitter,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  emailAddress: string = 'khwilowatai@gmail.com';
  GitHubLink = 'https://github.com/khwilo';
  LinkedInLink = 'https://www.linkedin.com/in/khwilo-watai';
  TwitterLink = 'https://twitter.com/khwilo';
  WhatsappLink = 'https://api.whatsapp.com/send?phone=+254718802061';

  GitHubIcon = faGithub;
  LinkedinIcon = faLinkedin;
  TwitterIcon = faTwitter;
  WhatsappIcon = faWhatsapp;

  constructor() {}

  ngOnInit() {}
}
