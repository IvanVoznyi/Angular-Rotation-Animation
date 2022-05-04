import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RotateAnimationComponent } from './rotate-animation/rotate-animation.component';
import { RotatePulsingAnimationComponent } from './rotate-pulsing-animation/rotate-pulsing-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    RotateAnimationComponent,
    RotatePulsingAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
