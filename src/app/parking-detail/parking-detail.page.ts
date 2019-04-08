import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ParkingService } from '../services/parking.service';

@Component({
  selector: 'app-parking-detail',
  templateUrl: './parking-detail.page.html',
  styleUrls: ['./parking-detail.page.scss'],
})
export class ParkingDetailPage implements OnInit {
  parking = this.parkingService.selectedParking;

  constructor( private parkingService: ParkingService ) { }

  ngOnInit() {
    console.log(this.parking);
  }

}
