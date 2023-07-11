import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Status } from 'src/types/Status';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css'],
})
export class IndicatorComponent implements OnChanges {
  @Input() status: Status = 'empty';
  indicators = ['gray', 'gray', 'gray'];

  ngOnChanges(changes: SimpleChanges): void {
    const status = changes['status'].currentValue;

    switch (status) {
      case 'empty':
        this.indicators = ['gray', 'gray', 'gray'];
        break;
      case 'short':
        this.indicators = ['red', 'red', 'red'];
        break;
      case 'easy':
        this.indicators = ['red', 'gray', 'gray'];
        break;
      case 'medium':
        this.indicators = ['yellow', 'yellow', 'gray'];
        break;
      case 'strong':
        this.indicators = ['green', 'green', 'green'];
        break;
      default:
        this.indicators = ['gray', 'gray', 'gray'];
    }
  }
}
