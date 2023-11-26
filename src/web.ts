import { WebPlugin } from '@capacitor/core';

import type { samplePlugin } from './definitions';

export class sampleWeb extends WebPlugin implements samplePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
