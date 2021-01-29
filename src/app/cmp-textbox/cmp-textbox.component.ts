import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cmp-textbox',
  templateUrl: './cmp-textbox.component.html',
  styleUrls: ['./cmp-textbox.component.scss']
})
export class CmpTextboxComponent implements OnInit {

  textboxvalue: any;

  @Input() initValue: any;
  @Output() onResult = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log('CHANGE initvalue', this.initValue);
    this.textboxvalue = this.initValue;
  }

  actionValueChanged(e: any) {

    const result = {
      texto: e.value,
      tamanho: e.value.length
    }

    // console.log('xxxxxxxxxxxxxxx', result);

    this.onResult.emit(result);

  }


}
