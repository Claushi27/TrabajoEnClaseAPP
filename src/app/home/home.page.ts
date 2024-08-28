import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: string = '';
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: string = '';

  constructor(private route: ActivatedRoute, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] as string;
    });
  }
  
  

  clearFields() {
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacion = '';
    this.fechaNacimiento = '';
  }

  async showInfo() {
    const alert = await this.alertCtrl.create({
      header: 'Usuario',
      message: `Su nombre es ${this.nombre} ${this.apellido}`,
      buttons: ['OK']
    });
    await alert.present();
  }
}

