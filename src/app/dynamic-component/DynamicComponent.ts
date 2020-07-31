import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './DynamicComponent.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicComponent implements OnInit {

  name = 'Dynamic Component';

  ngOnInit() {

  }

}
