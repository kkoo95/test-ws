import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibaService {

  constructor() { }

  getLol(): string {
    return 'lola';
  }
}
