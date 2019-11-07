import { Injectable } from '@angular/core';
import { ITab } from './tab.model';

@Injectable({
  providedIn: 'root',
})
export class TabService {
  tabs: ITab[] = [];
  tabOptions: ITab[] = [{ name: 'Movies', url: '/movies' }, { name: 'Songs',   url: '/songs' },
  { name: 'Movie Details',   url: '/movie/3' }
];
  constructor() {}

  addTab(url: string) {
    const tab = this.getTabOptionByUrl(url);
    if (!tab) return;
    if (!this.tabs.includes(tab)) {
      this.tabs.push(tab);
    }
    console.log(this.tabs);
  }

  getTabOptionByUrl(url: string): ITab {
    return this.tabOptions.find(tab => tab.url === url);
  }

  deleteTab(index: number) {
    this.tabs.splice(index, 1);
  }
}
