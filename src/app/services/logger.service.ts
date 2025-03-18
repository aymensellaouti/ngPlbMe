import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  logger(message: unknown): void {
    console.log('From Logger Service');
    console.log({message});
  }
}
