import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  onLogin() {
    if (this.username.length >= 3 && this.username.length <= 8 && this.password.length === 4) {
      // Redirigir a la página Home pasando los datos del usuario
      this.navCtrl.navigateForward('/home', {
        queryParams: { username: this.username }
      });
    } else {
      alert('Por favor, ingresa datos válidos');
    }
  }

  navigateToRegister() {
    // Lógica para navegar a la página de registro si fuera necesario
  }
}
