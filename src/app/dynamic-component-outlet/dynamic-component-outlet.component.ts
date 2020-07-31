import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-dynamic-component-outlet',
  templateUrl: './dynamic-component-outlet.component.html',
  styleUrls: ['./dynamic-component-outlet.component.scss']
})
export class DynamicComponentOutletComponent implements OnInit {

  @ViewChild('dynamicComponentOutlet', {read: ViewContainerRef, static: true})
  componentOutlet: ViewContainerRef;

  private dynamicComponentRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    // this.method2();
    this.method1();

  }

  method1(): void {
    import('src/app/dynamic-component/DynamicComponent')
      .then(module => {
        console.log(module);

        const factory = this.componentFactoryResolver.resolveComponentFactory(module.DynamicComponent);
        this.dynamicComponentRef = this.componentOutlet.createComponent(factory);
        this.dynamicComponentRef.instance.name = 'Zostalem stworzony dynamicznie poprzez dynamiczny import';

      })
  }

  // method2(): void {
  //   const factory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
  //   this.dynamicComponentRef = this.componentOutlet.createComponent(factory);
  //   this.dynamicComponentRef.instance.name = 'Zostalem stworzony dynamicznie poprzez stara metode';
  // }

}
