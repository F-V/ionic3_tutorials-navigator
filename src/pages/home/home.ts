import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  destination:string;
  start:string;

  constructor(
      public navCtrl: NavController,
      private launchNavigator: LaunchNavigator,
      private toastCtrl:ToastController
  ) {
    this.start = "";
    this.destination = "50.8245564,3.2496834";
  }

  navigate(){
    let options: LaunchNavigatorOptions = {
      start: this.start
    };

    this.launchNavigator.navigate(this.destination, options)
        .then(
            success => this.presentToast('Launched navigator'),
            error => this.presentToast('Error launching navigator: ' + error)
    );
  }

  presentToast(message:string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}
