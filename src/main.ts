import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// eslint-disable-next-line no-multiple-empty-lines

platformBrowserDynamic().bootstrapModule(AppModule)
  // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression, arrow-body-style
  .catch(err => console.error(err));
