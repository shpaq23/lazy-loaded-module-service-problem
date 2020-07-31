import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AppleTreeService } from './AppleTreeService';

@Component({
  selector: 'app-forest',
  templateUrl: './forest.component.html',
  styleUrls: ['./forest.component.scss'],
  providers: [
    AppleTreeService
  ]
})
export class ForestComponent implements OnInit, OnDestroy {

  @Input()
  id: number

  constructor(private readonly appleTreeService: AppleTreeService) { }

  ngOnInit(): void {
    this.appleTreeService.appleNotifier(this.id);
  }

  ngOnDestroy() {
    console.log('Component onDestroy', this.id);
  }

}
