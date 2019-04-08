import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  account = { email: '', password: '' };

  constructor( private userService: UserService,
               private toastCtrl: ToastController,
               public navCtrl: NavController ) { }

  ngOnInit() {
  }

  doLogin() {
    if ((this.account.email != '') && (this.account.password != '')) {
      this.userService.signin(this.account.email, this.account.password)
        .then(data => {
          console.log(data);
          this.presentToast("Success.");
          // this.navCtrl.navigateRoot('/tab1');
          // this.router.navigateByUrl('/tab1');
          // this.router.navigate(['/tab1', { id: itemId }]);
          this.navCtrl.navigateForward('/tabs/tab1');
        })
        .catch(error => {
          console.log(error);
          this.presentToast(error.message);
        });
    } else {
      this.presentToast("Email & password are required.");
      return false;
    }
  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  gotoSignup() {
    this.navCtrl.navigateForward('/signup');
  }

}
