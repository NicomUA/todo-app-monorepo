import { Injectable } from '@nestjs/common';
import { createHash } from 'node:crypto';

@Injectable()
export class UtilsService {
  randomString(length = 10) {
    return Math.random().toString(36).substr(2, length);
  }

  randomNumber(max = 100) {
    return Math.floor(Math.random() * max);
  }

  sha1(str: string): string {
    return createHash("sha1").update(str, "binary").digest("hex");
  }
}
