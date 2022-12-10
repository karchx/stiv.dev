import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ILinks } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class LinkTreeService {

  links: ILinks[] = [
    {
      link: 'https://github.com/karchx',
      tooltip: 'Github',
      icon: 'fab fa-github'
    },
    {
      link: 'https://www.linkedin.com/in/keneth-sandoval',
      tooltip: 'Linkedin',
      icon: 'fab fa-linkedin-in'
    },
  ];

  constructor() { }

  getLinks(): Observable<ILinks[]> {
    return of(this.links);
  }
}
