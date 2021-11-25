import { Firebase } from "../util/Firebase";
import { Model } from "./Model";

export class Chat extends Model {

    constructor() {
        super();


    }

    get users() { this._data.users; }
    set users(value) { this._data.users = value; }


    get timeStamp() { this._data.timeStamp; }
    set timeStamp(value) { this._data.timeStamp = value; }


    static getRef() {

        return Firebase.db().collection('/chats');

    }

    static create(meEmail, contactEmail) {

        return new Promise((s, f) => {

            let users = {};

            users[btoa(meEmail)] = true;
            users[btoa(contactEmail)] = true;

            //add gera o ID automaticamente na coleção
            Chat.getRef().add({
                users,
                timeStamp: new Date()
            }).then(doc => {

                Chat.getRef().doc(doc.id).get()
                    .then(chat => {

                        s(chat);

                    }).catch(err => {
                        f(err);
                    });

            }).catch();

        });
    }

    static find(meEmail, contactEmail) {

        //where diretamente no firebase('codproduto', 'comparação', '13')
        return Chat.getRef()
            .where(btoa(meEmail), '==', true) //AND
            .where(btoa(contactEmail), '==', true)
            .get();

    }

    static createIfNotExists(meEmail, contactEmail) {

        return new Promise((s, f) => {

            Chat.find(meEmail, contactEmail).then((chats) => {
                //empty - metodo de consulta lista do firebase
                if (chats.empty) {

                    Chat.create(meEmail, contactEmail).then(chat => {

                        s(chat);

                    });

                } else {

                    chats.forEach(chat => {
                        s(chat);
                    });

                }

            }).catch(err => {

                f(err);

            });

        });

    }

}