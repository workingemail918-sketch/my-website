import { Injectable } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, User, signOut, sendPasswordResetEmail } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firstValueFrom } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Firestore, collection, addDoc, serverTimestamp, getDocs, collectionData, deleteDoc, doc } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root',
})
export class Authservice {
  async getCurrentUser() {
    const fbuser = await firstValueFrom(this.user$);
    if (!fbuser) {
      return null;
    }
    return {
       story:'',
       createdat: serverTimestamp(),
      name:'',
      uid: fbuser?.uid,
      email: fbuser?.email,
      displayName: fbuser?.displayName,
      displayphotoURL: fbuser?.photoURL
    };
  }
  
    user$: Observable<User | null>;
  constructor(private auth: Auth, private firestore: Firestore){
    this.user$ = user(this.auth);
  }
  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  googleSignIn() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
  signOut() {
    return signOut(this.auth);
  }
  resetPassword(email: string) {
    return sendPasswordResetEmail(this.auth, email);
  }


  adddocs(data:{}){
      const usersRef = collection(this.firestore, 'users-post');
    return  addDoc(usersRef,data)
  }

 getUsers(): Observable<any[]> {
  const usersRef = collection(this.firestore, 'users-post');
  
  return collectionData(usersRef, { idField: 'id' });
}

  deletedoc(id: string){
  const docRef = doc(this.firestore, `users-post/${id}`);
  deleteDoc(docRef).then(() => {
    console.log('Document deleted with ID: ', id);
  }).catch((error) => { 
    console.error('Error deleting document: ', error);
  });
}
}
