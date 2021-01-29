import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConsultaUsrService } from './consulta-usr.service';

@Component({
  selector: 'app-cmp-consulta-usr',
  templateUrl: './cmp-consulta-usr.component.html',
  styleUrls: ['./cmp-consulta-usr.component.scss']
})
export class CmpConsultaUsrComponent implements OnInit {

  data: any;
  // private _subscription:  Subscription;

  constructor(private service: ConsultaUsrService) {
  }

  ngOnInit(): void {

    // this._subscription =

    this.service.carregar()
      .subscribe(
        r => {
          console.log("RESULT", r)
          this.data = r;
        },
        e => {
          console.log("ERROR", e)
        }
      );
  }

  ngOnDestroy() {
    // this._subscription.unsubscribe();
  }

}
