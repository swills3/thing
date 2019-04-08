import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { NavController } from '@ionic/angular';
// import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private navCtrl: NavController ) {
    firebase.auth().onAuthStateChanged((user: firebase.User) => {
      if (user) {
        console.log('User is logged in');
        this.navCtrl.navigateRoot('/tabs/tab1');
      } else {
        console.log('User is not logged in');
        this.navCtrl.navigateRoot('/login');
      }
    });
  }

  signup(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  signin(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signout() {
    return firebase.auth().signOut();
  }

  currentUser() {
    return firebase.auth().currentUser;
  }

}
