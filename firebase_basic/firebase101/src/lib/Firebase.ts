// Firebase exports

import { initializeApp } from 'firebase/app'
import {  getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import  { config } from '../config/Config'

import type { FirebaseApp } from 'firebase/app'
import type { Auth } from 'firebase/auth'
import type { Firestore } from 'firebase/firestore'

interface IFirebaseInitializeType
{
    app: FirebaseApp,
    firebaseAuth: Auth,
    firebaseStore: Firestore
}

export function FirebaseInitialize () : IFirebaseInitializeType
{
    
   const app: FirebaseApp = initializeApp (config.firebaseConfig)
   const firebaseAuth: Auth = getAuth (app)
   const firebaseStore: Firestore = getFirestore (app)

   return { app, firebaseAuth, firebaseStore }
}
