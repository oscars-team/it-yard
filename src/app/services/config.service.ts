import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  private _host: string = 'http://39.108.68.227:88';
  get host(): string {
    return this._host;
  }
}
