import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController) {

  }

  message(){
    let alert = this.alertCtrl.create({
      title: 'Produto adicionado',
      buttons: ['ok']
    });
    alert.present();
  }

}
