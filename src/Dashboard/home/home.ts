import { Component, OnInit } from '@angular/core';
import { Authservice } from '../../app/authservice';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { serverTimestamp } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CommonModule,FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
constructor(private authservice: Authservice, private router: Router) { }
isinputyourname:boolean = false;
iscommment = false
firestuff$!:Observable<any[]>  ;
 user: any = {
   story:'',
    createdat: serverTimestamp(),
      name:'',
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
    this.isinputyourname = true

    this.firestuff$=this.authservice.getUsers()
    console.log(this.firestuff$);
    
  }
  signOut(){
    this.authservice.signOut()
      .then(() => {
        this.router.navigate(['/Sign-in']);
      })
      .catch((error) => {
        console.error('Sign out error:', error);
      });
  }
  displayname(){
    this.isinputyourname =false
  }
  iscomment(){
    this.iscommment = !this.iscommment
  }
  postt(data:{}){
    this.authservice.adddocs(data).then(()=>{
      this.user.story = ''
    })
    this.iscommment = false 
  }
 delete(userId: string) {
    this.authservice.deletedoc(userId)
 }
}

