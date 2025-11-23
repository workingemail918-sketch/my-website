import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Authservice } from '../../app/authservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {
  constructor(private authservice: Authservice, private router: Router) { }
email: string = '';

resetpassword() {
  this.authservice.resetPassword(this.email)
    .then(() => {
      console.log('Password reset link sent to:', this.email);
      alert('Password reset link sent to your email.');
      setTimeout(() => {
       this.router.navigate(['/Sign-in']);
      }, 1500);
    })
    .catch((error) => {
      console.error('Error sending password reset link:', error);
    });}

}
