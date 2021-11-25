/** https://firebase.google.com/docs/web/setup?hl=pt-br#aplicativos-node.js*/
import firebase from "firebase";
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

export class Firebase {
    constructor() {

        this._config = {
            apiKey: "AIzaSyDd3gP1C8W-G39taRzqmZlfKFtjFxMYnuY",
            authDomain: "whatsapp-clone-cfcfa.firebaseapp.com",
            projectId: "whatsapp-clone-cfcfa",
            storageBucket: "whatsapp-clone-cfcfa.appspot.com",
            messagingSenderId: "60243468017",
            appId: "1:60243468017:web:b99d150482ee4811069350",
            measurementId: "G-4NG4CZDBXM"
        };

        this.init();
    }

    init() {
        if (!window._initializedFirebase) {

            firebase.initializeApp(this._config);

            firebase.firestore().settings({

                // timestampsInSnapshots: true

            });

            window._initializedFirebase = true;
        }
    }

    static db() {
        return firebase.firestore();
    }
    static hd() {
        return firebase.storage();
    }

    initAuth() {
        return new Promise((s, f) => {
            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
                .then(result => {

                    let token = result.credential.accessToken;
                    let user = result.user;
                    s({
                        user,
                        token
                    });

                })
                .catch(err => {

                    f(err);

                });
        });
    }
}