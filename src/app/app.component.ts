import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController

  ) {

    this.initializeApp();
  }

  initializeApp() {
    firebase.initializeApp({
      apiKey: "AIzaSyCdeviIQcvJbk2XvKg1l_oJYam_Z5JDJdk",
 authDomain: "thing-2edda.firebaseapp.com",
 databaseURL: "https://thing-2edda.firebaseio.com",
 projectId: "thing-2edda",
 storageBucket: "thing-2edda.appspot.com",
 messagingSenderId: "project-955421804106"
})



    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
   firebase.auth().signOut();
   this.menu.close();
 }
}
