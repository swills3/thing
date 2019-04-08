// import { Injectable } from '@angular/core';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class ParkingService {
//   public expenses = [
//       {id: 1, address: '123 state st', time: '1 hour', cost: 25 },
//       {id: 2, address: '124 state st', time: '2 hour', cost: 35 },
//       {id: 3, address: '125 state st', time: '3 hour', cost: 45 }]
//   constructor() { }
// }
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {
  public parking = [];
  public selectedParking: any;
  ref = firebase.database().ref('parking/');

  constructor() {
    this.ref.on('value', resp => {
      this.parking = [];
      this.parking = snapshotToArray(resp);
      console.log(this.parking);
    });
  }

  addParking(parking) {
    parking['user'] = firebase.auth().currentUser.email;
    return firebase.database().ref('parking/').push(parking);
  }
}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });
  return returnArr;
};
