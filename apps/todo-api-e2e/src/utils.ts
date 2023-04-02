import { createHash } from 'node:crypto';

export function randomString(length = 10) {
  return Math.random().toString(36).substr(2, length);
}

export function randomNumber(max = 100) {
  return Math.floor(Math.random() * max);
}

export function sha1(str: string): string {
  return createHash("sha1").update(str, "binary").digest("hex");
}


export function getAuthConfig(token: string) {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
}
