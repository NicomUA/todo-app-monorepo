import { Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class AppLogger implements LoggerService {

  warn(message: string, ...arg: any) {
    console.warn(message);
  }

  info(message: string, ...arg: any) {
    console.info(message);
  }

  error(message: string, ...arg: any) {
    console.error(message);
  }

  debug(message: string, ...arg: any) {
    console.debug(message);
  }

  log(message: string, ...arg: any) {
    console.log(message);
  }
}
