import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ConsultaUsrService {

  api = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http: HttpClient) {
  }

  carregar() {
    return this._http.get(this.api);
  }

}
