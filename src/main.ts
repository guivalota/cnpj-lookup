import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';  // ✅ Importar o novo método
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [provideHttpClient()],  // ✅ Usar o provideHttpClient
})
  .catch((err) => console.error(err));
