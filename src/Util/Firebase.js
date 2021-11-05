const firebase = require('firebase');
require('firebase/firestore');

export class Firebase {

    constructor() {

        this.config = {
            apiKey: "AIzaSyDd3gP1C8W-G39taRzqmZlfKFtjFxMYnuY",
            authDomain: "whatsapp-clone-cfcfa.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-cfcfa.firebaseio.com",
            projectId: "whatsapp-clone-cfcfa",
            storageBucket: "",
            messagingSenderId: "60243468017"
        }

        this.init();
    }

    init() {

        if (!this._initialized) {
            firebase.initializeApp(this.config);

            firebase.firestore().settings({
                timestampsInSnapshots: true
            });

            this._initialized = true;
        }

    }

    static db() {

        return firebase.firestore();
    }

    static hd() {
        return firebase.storage();
    }

}