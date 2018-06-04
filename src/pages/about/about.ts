import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  searchQuery: string = '';
  items: string[];
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.initializeItems();
  }

  initializeItems(){
    this.items = [
    'Macarrão',
    'Pêra',
    'Soja',
    'Arroz',
    'Batata', 
    'Trigo', 
    'Maçã',
    'Repolho',
    'Passas',
    'Cereja'
    ]; 
  }

  getItems(ev: any) {
    // Reset items back all of the items
    this.initializeItems();

    //set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string dont filter items
    if (val && val.trim() != ""){
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

  }

  message(){
    let alert = this.alertCtrl.create({
      title: 'Substância',
      subTitle: 'Talvez esta substância provenha de uma fonte animal, portanto, tenha cuidado ao consumi-la',
      buttons: ['OK']
    });
    alert.present();
  }

  messagefav(){
    let alert = this.alertCtrl.create({
      title: 'Nome da substancia',
      subTitle: 'Essa substância foi adicionada aos seus favoritos',
      buttons: ['OK']
    });
    alert.present();
  }

}

