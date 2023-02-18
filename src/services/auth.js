import firebaseAdmin from '../config/firebaseAdmin.js';
import firebase from '../config/firebase.js';

export async function signUp(email, password) {
    const userRecord = await firebaseAdmin.auth().createUser({
      email,
      password,
    });
    const usersCollection = firebaseAdmin.firestore().collection('users');
    const userDocRef = usersCollection.doc(userRecord.uid);

    await userDocRef.set({
      email
    });
  
    return userRecord.toJSON();
  }
  
 export async function signIn(email, password) {
    const { user } = await firebase.auth.signInWithEmailAndPassword(email, password);
    return user.toJSON();
  }

  export async function signInWithProviderAndCreateUser(userCredential) {
    const { user } = await firebase.auth.signInWithCredential(userCredential);
    const usersCollection = firebaseAdmin.firestore().collection('users');
    const userDocRef = usersCollection.doc(user.uid);
    const userDoc = await userDocRef.get();

    if (userDoc.exists) {
      // El usuario ya existe en Firestore, iniciar sesión y devolver los datos de usuario
      return user.toJSON();
    } else {
      // El usuario no existe en Firestore, crearlo
      const newUserDocRef = await usersCollection.doc(user.uid).set({
        name: user.displayName,
        email: user.email,
        // Otros datos del usuario
      });

      // Devolver los datos del usuario
      const newUserDoc = await newUserDocRef.get();
      return newUserDoc.data();
    }

  }

  export default {
    signUp,
    signIn,
    signInWithProviderAndCreateUser
  }