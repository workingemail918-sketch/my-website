import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Authservice } from '../../app/authservice';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-sign-up',
  imports: [ RouterLink, ReactiveFormsModule ],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  isspinner = false;
signupForm:FormGroup;
constructor(private authservice: Authservice, private fb:FormBuilder, private router:Router) { 
this.signupForm = this.fb.group({
  email: [''],
  password: ['']
});

}

register(email: string, password: string) {
  this.authservice.register(email, password)
    .then((userCredential) => {   
      alert('Registration Successful');
      this.router.navigate(['/Sign-in']);
      const user = userCredential.user;
      console.log('Registration successful:', user);
    })
    .catch((error) => {
      console.error('Registration error:', error);  
});}
}