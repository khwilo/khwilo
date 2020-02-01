import { Component, OnInit } from '@angular/core';

import {
  faGithub,
  faLinkedin,
  faTwitter,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  GitHubLink = 'https://github.com/khwilo';
  LinkedInLink = 'https://www.linkedin.com/in/khwilo-watai';
  TwitterLink = 'https://twitter.com/khwilo';
  WhatsappLink = 'https://api.whatsapp.com/send?phone=+254718802061';

  LinkedInIcon = faLinkedin;
  GitHubIcon = faGithub;
  WhatsappIcon = faWhatsapp;
  TwitterIcon = faTwitter;

  constructor() {}

  ngOnInit() {}
}
