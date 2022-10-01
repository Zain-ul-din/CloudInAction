// Good Partice


import { initializeApp } from 'firebase/app'
import {  getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import  { config } from '../config/Config'

import type { FirebaseApp } from 'firebase/app'

export default function FirebaseInitialize ()
{
    
   const app: FirebaseApp = initializeApp (config.firebaseConfig)
    
}