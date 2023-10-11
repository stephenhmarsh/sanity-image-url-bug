import { Injectable } from '@nestjs/common';
import { createClient } from '@sanity/client';
import urlBuilder from '@sanity/image-url';

@Injectable()
export class AppService {
  getHello(): string {
    const client = createClient({
      apiVersion: '2023-10-11',
      projectId: 'cctd4ker',
      dataset: 'preview',
    });
    const foo = urlBuilder(client);
    return 'Hello World!';
  }
}
