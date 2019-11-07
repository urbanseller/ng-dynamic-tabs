import { Component, OnInit, OnDestroy } from '@angular/core';
import {TabService} from '../tab.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {
  

  constructor(private tabService: TabService, private router: Router) {

  }

  time:any;
 
  ngOnInit() {
    this.time = new Date();
    console.log("Movies Inititng "+this.time);
  }
  ngOnDestroy() {
    console.log("Movies destroyed "+this.time);
  }
  
  openTab(url: string) {
    this.tabService.addTab(url);
     this.router.navigateByUrl(url);
  }
}
