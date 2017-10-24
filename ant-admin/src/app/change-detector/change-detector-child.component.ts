/**
 * Created by kongming on 2017/10/24.
 */
import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-change-detector-child',
  template:`{{text}}--{{counter}}`,
  styleUrls: ['./change-detector.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChangeDetectorChildComponent implements OnInit,OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes));
  }


  counter : number = 0;

  @Input() text : string;

  constructor(private cdrf : ChangeDetectorRef) { }

  ngOnInit() {
    setInterval(()=>{
      this.counter++;
      this.cdrf.markForCheck();
    },1000);
  }

}
