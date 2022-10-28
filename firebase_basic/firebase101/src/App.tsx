import React from 'react'

// Firebase imports
import { config } from './config/Config'
import { FirebaseApp, initializeApp } from 'firebase/app'
import { Firestore, getFirestore } from 'firebase/firestore'

// init App
const firebaseApp:FirebaseApp = initializeApp (config.firebaseConfig)

// firebase store acess
const firebaseStore:Firestore = getFirestore (firebaseApp)



export default function App () : React.ReactElement {
    return (
        <>
            <h1>FireBase</h1>
        </>
    )
}
