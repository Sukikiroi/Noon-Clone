import {firebase,googleProvider} from'./firebase.confige'
export const startLogin =() => {

    return () => {

        return firebase.auth().signInWithPopup(googleProvider);

    }
}