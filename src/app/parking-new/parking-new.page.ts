import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../services/parking.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-parking-new',
  templateUrl: './parking-new.page.html',
  styleUrls: ['./parking-new.page.scss'],
})
export class ParkingNewPage implements OnInit {
  newParking = { type: '', description: '', cost: 0 };

  constructor( private parkingService: ParkingService,
               private navCtrl: NavController ) { }

  ngOnInit() {
  }

  addParking() {
    console.log(this.newParking);
    this.parkingService.addParking(this.newParking)
      .then(data => {
        console.log(data);
        this.navCtrl.navigateBack('/tabs/tab1');
      })
      .catch(error => {
        console.log(error);
      });
  }

  inputCheck() {
    return (this.newParking.description == '');
  }

}
