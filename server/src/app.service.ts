import { Injectable } from '@nestjs/common';
import { readFile } from 'fs';
import { resolve } from 'node:path';

@Injectable()
export class AppService {
  async getData(): Promise<any> {
    return new Promise(res => {
      readFile(resolve(__dirname, './test.json'), (err, data) => {
        res(JSON.parse(data.toString()));
      });
    })
  }
}
