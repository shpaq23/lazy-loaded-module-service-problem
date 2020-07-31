import { Injectable, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from '../BaseService';

@Injectable()
export class RainForestAppleTreeService extends BaseService implements OnDestroy {
  private appleEmoji: string = '🍏';
  private id: number;

  constructor() {
    super();
  }

  appleNotifier(id: number): void {
    interval(1000)
      .pipe(
        map(() => this.appleEmoji),
        this.takeUntilDestroy()
      )
      .subscribe(value => {
        console.log(`Forest ${id}: ${value}`);
      });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    console.log('Service onDestroy: ', this.id);
  }

}
