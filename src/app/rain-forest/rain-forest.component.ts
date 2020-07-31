import { Component, OnDestroy, OnInit } from '@angular/core';
import { RainForestAppleTreeService } from './RainForestAppleTreeService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rain-forest',
  templateUrl: './rain-forest.component.html',
  styleUrls: ['./rain-forest.component.scss']
})
export class RainForestComponent implements OnInit, OnDestroy {

  id: number;

  constructor(private readonly rainForestAppleTreeService: RainForestAppleTreeService,
              private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
   this.id = +this.route.snapshot.paramMap.get('id');
   this.rainForestAppleTreeService.appleNotifier(this.id);
  }

  ngOnDestroy() {
    console.log('Component onDestroy ', this.id);
    // this.rainForestAppleTreeService.ngOnDestroy();
  }

}
