import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

let localStorage = (<any>window).localStorage;
let root = localStorage.getItem('page');

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:string = root || 'HomePage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();

      // Dark statusbar for Android
      if (platform.is('android')) {
        statusBar.overlaysWebView(false);
        statusBar.backgroundColorByHexString('#272727');
      }
      splashScreen.hide();
    });
  }
}

