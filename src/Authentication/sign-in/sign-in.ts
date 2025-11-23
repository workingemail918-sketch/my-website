import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Authservice } from '../../app/authservice';
import { get } from '@angular/fire/database';

@Component({
  selector: 'app-sign-in',
  imports: [ RouterLink, ReactiveFormsModule ],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn implements OnInit {
 signinForm:FormGroup;
  constructor(private fb:FormBuilder, private router:Router, private authservice: Authservice) { 
    this.signinForm = this.fb.group({
    email: [''],
    password: ['']
  });
  }
  user: any = {
    name:'rayb',
    uid: 'uid123',
    email: 'rayb@example.com',
     displayName: '',
      displayphotoURL: ''
  }
  ngOnInit(): void {
    this.authservice.getCurrentUser().then(user => { 
      
        this.user = user;
        console.log('Current user:', this.user);
    });
  }

  login(email: string, password: string) {
    this.authservice.login(email, password)
      .then((userCredential) => {   
        this.router.navigate(['/dashboard']);
        const user = userCredential.user;
        console.log('Login successful:', user);
        
        
      })
      .catch((error) => {
        console.error('Login error:', error);  
  
  });

}
  
  googleSignIn() {
    this.authservice.googleSignIn()
      .then((result) => {
        setTimeout(() => {
                  alert('Google Sign-In Successful');
          }, 1500);
        this.router.navigate(['/dashboard/Home']);
        const user = result.user;
        console.log('Google Sign-In successful:', user);
      })
      .catch((error) => {
        console.error('Google Sign-In error:', error);
  });  }

  test(){
   console.log(this.user);
   
  }
}
