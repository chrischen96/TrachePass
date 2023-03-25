import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx'
import { LoginPageModule } from './login/login.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot({mode:"ios"}), 
    AppRoutingModule, 
    NgxIonicImageViewerModule, 
    FormsModule, 
    ReactiveFormsModule, 
    LoginPageModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    BarcodeScanner, 
    FingerprintAIO,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
