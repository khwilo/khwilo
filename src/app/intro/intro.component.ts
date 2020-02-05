import { Component, OnInit } from '@angular/core';

import {
  faGithub,
  faLinkedin,
  faTwitter,
  faWhatsapp,
  faDev
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  name = 'Khwilo Kabaka';
  profession = 'Mobile Web Application Developer';
  emailAddress = 'khwilowatai@gmail.com';
  location = 'Nairobi, Kenya';
  GitHubLink = 'https://github.com/khwilo';
  LinkedInLink = 'https://www.linkedin.com/in/khwilo-watai';
  TwitterLink = 'https://twitter.com/khwilo';
  WhatsappLink = 'https://api.whatsapp.com/send?phone=+254718802061';
  DevToLink = 'https://dev.to/khwilo';

  envelopeIcon = faEnvelope;
  mapMarkerIcon = faMapMarker;

  LinkedInIcon = faLinkedin;
  GitHubIcon = faGithub;
  WhatsappIcon = faWhatsapp;
  TwitterIcon = faTwitter;
  DevToIcon = faDev;

  constructor() {}

  ngOnInit() {}
}
