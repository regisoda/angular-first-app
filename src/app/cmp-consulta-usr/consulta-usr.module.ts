import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { DxDataGridModule } from "devextreme-angular";
import { CmpConsultaUsrComponent } from "./cmp-consulta-usr.component";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    DxDataGridModule
  ],
  exports: [
    CmpConsultaUsrComponent
  ],
  declarations: [
    CmpConsultaUsrComponent
  ],
})
export class ConsultaUsrModule { }
