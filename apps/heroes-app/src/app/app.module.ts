import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TuiTabsModule } from '@taiga-ui/kit';
import { TuiLinkModule } from '@taiga-ui/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
@NgModule({
  declarations: [AppComponent, ContentLayoutComponent, NavbarComponent],
  imports: [
    BrowserModule,
    CoreModule,
    TuiTabsModule,
    TuiLinkModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).

      registrationStrategy: 'registerWhenStable:30000',
    }),
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
