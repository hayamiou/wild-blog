import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Pour ngForm et ngModel
import { CommonModule } from '@angular/common';  // Pour ngIf et ngClass

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, CommonModule],  // Ajout des modules nécessaires
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  message: string = '';
  isSuccess: boolean = false;

  onSubmit(form: any) {
    if (form.valid) {
      this.message = 'Login validé';
      this.isSuccess = true;
    } else {
      this.message = 'Erreur : Vérifiez vos informations';
      this.isSuccess = false;
    }
  }
}
