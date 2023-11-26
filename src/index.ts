import { registerPlugin } from '@capacitor/core';

import type { samplePlugin } from './definitions';

const sample = registerPlugin<samplePlugin>('sample', {
  web: () => import('./web').then(m => new m.sampleWeb()),
});

export * from './definitions';
export { sample };
