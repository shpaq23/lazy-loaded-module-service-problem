import { OnDestroy } from '@angular/core';
import { MonoTypeOperatorFunction, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export abstract class BaseService implements OnDestroy {

  protected onDestroy$: Subject<any> = new Subject<any>();

  ngOnDestroy() {
    this.complete();
  }

  protected takeUntilDestroy<T>(): MonoTypeOperatorFunction<T> {
    return (input$) => input$.pipe(
      takeUntil(this.onDestroy$)
    );
  }

  private complete() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
