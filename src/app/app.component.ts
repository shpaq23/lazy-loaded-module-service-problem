import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  forestVisible = true;

  forestIndex = 1;

  rainForestVisible = false;

  constructor(private readonly router: Router) {
  }

  ngOnInit() {
  }


  removeForest(): void {
    this.forestVisible = false;
  }

  addForest(): void {
    this.forestVisible = true;
    this.forestIndex++;
  }

  navigateToRainForest(): void {
    this.router.navigate([`rain-forest/${this.forestIndex}`]);
    this.forestIndex++;
    this.rainForestVisible = true;
  }

  navigateToAppComponent(): void {
    this.router.navigate(['/']);
    this.rainForestVisible = false;
  }

}
