import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { ParkingService } from '../services/parking.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  // items = <any>[];
  // items = this.parkingService.parking;
  constructor( private userService: UserService,
               private parkingService: ParkingService,
               private navCtrl: NavController ) {
  }

  // ngAfterViewInit() {
  //   if (!this.userService.signedIn) {
  //     console.log('not signed in');
  //     this.showLogin();
  //   }
  // }

  ngOnInit() {

  }

  // showLogin() {
  //   this.navCtrl.navigateRoot('/login');
  // }

  onSelect(parking) {
   console.log(parking);
   this.parkingService.selectedParking = parking;
   this.navCtrl.navigateForward('/parking-detail');
 }

  newParking() {
    this.navCtrl.navigateForward('/parking-new');
  }

}
