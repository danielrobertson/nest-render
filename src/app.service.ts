import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! This response from a Nest.js endpoint made by Daniel Nov 3, 2023 😎';
  }
}
