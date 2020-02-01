import { Component } from '@angular/core';

import {
  faAngular,
  faCss3,
  faGithub,
  faHtml5,
  faJs,
  faLinkedin,
  faNodeJs,
  faTwitter,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faDatabase,
  faExternalLinkAlt,
  faMapMarker,
  faPen
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'khwilo';
  name = 'Khwilo Kabaka';
  profession = 'Mobile Web Application Developer';
  emailAddress = 'khwilowatai@gmail.com';
  location = 'Nairobi, Kenya';
  GitHubLink = 'https://github.com/khwilo';
  LinkedInLink = 'https://www.linkedin.com/in/khwilo-watai';
  TwitterLink = 'https://twitter.com/khwilo';
  WhatsappLink = 'https://api.whatsapp.com/send?phone=+254718802061';

  LinkedInIcon = faLinkedin;
  GitHubIcon = faGithub;
  WhatsappIcon = faWhatsapp;
  TwitterIcon = faTwitter;
  HTMLIcon = faHtml5;
  CSS3Icon = faCss3;
  JSIcon = faJs;
  AngularIcon = faAngular;
  NodeJSIcon = faNodeJs;

  envelopeIcon = faEnvelope;
  mapMarkerIcon = faMapMarker;
  databaseIcon = faDatabase;
  externalLinkIcon = faExternalLinkAlt;
  penIcon = faPen;
}
