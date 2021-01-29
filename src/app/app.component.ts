import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  title = 'FIRST APP';

  actionTeste() {
    this.title = "TESTE";
  }

  actionTeste2(e: any) {
    console.log('actionTeste2', e);

    this.title = e.texto;
  }
}
