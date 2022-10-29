import React, {useEffect, useState} from 'react'

// Firebase imports
import { config } from './config/Config'
import { FirebaseApp, initializeApp } from 'firebase/app'
import 
{ 
    Firestore,
    getFirestore, // acess firestore
    collection,  // collection access
    onSnapshot, // on data change
    doc, // document ref
    setDoc, // write to document
    CollectionReference,
    DocumentData,
    QuerySnapshot,
    QueryDocumentSnapshot,
    DocumentReference,
    DocumentSnapshot
} from 'firebase/firestore'


// init App
const firebaseApp:FirebaseApp = initializeApp (config.firebaseConfig)

// firebase store acess
const firebaseStore:Firestore = getFirestore (firebaseApp)

// reference to collection
const chatRoomCol_Ref: CollectionReference <DocumentData> = collection (firebaseStore, 'chat room')

// document Ref
const document_Ref: DocumentReference <DocumentData> = doc (chatRoomCol_Ref, 'nPtxYe3Uxff5vaJov3jZ') 

// set doc
function SetDoc (data: object): void 
{
    setDoc (document_Ref, data)
}

export default function App () : React.ReactElement {

    const [messages, setMessages] = useState <DocumentData[]> ([])

    useEffect (()=>{
        
        ///
        /// On SpanShot Collection
        ///

        // onSnapshot (chatRoomCol_Ref, (snapShot: QuerySnapshot <DocumentData>) => {
        //     const newData = snapShot.docs.map ( (val: QueryDocumentSnapshot <DocumentData>) => {
        //         return val.data ()
        //     });

        //     setMessages (newData)
        // })

        ///
        /// On SpanShot Query
        ///

        onSnapshot  (document_Ref, (snapShot: DocumentSnapshot <DocumentData>) => {
            console.log (snapShot.data ())
        })

    }, [])


    return (
        <>
            <h1>FireBase</h1>
            
        </>
    )
}

