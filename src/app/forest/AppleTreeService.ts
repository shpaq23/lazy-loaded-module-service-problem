import { Injectable, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { BaseService } from '../BaseService';

@Injectable()
export class AppleTreeService extends BaseService implements OnDestroy {

  private appleEmoji: string = '🍎';
  private id: number;

  constructor() {
    super();
  }


  appleNotifier(id: number): void {
    this.id = id;
    interval(1000)
      .pipe(
        map(() => this.appleEmoji),
        this.takeUntilDestroy()
      )
      .subscribe(value => {
        console.log(`Forest ${this.id}: ${value}`);
      });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    console.log('Service onDestroy: ', this.id);
  }


}
