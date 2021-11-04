export class ClassEvent {

    constructor() {

        this._events = {};

    }

    on(eventName, fn) {

        if (!this._events[eventName]) this._events[eventName] = new Array();

        this._events[eventName].push(fn);
    }


    trigger() {

        let args = [...arguments]; //arguments recebe todos os argumentos passados na função, assim não precisando definir argumentos obrigatorios.
        let eventName = args.shift(); //shift remove o primeiro vetor e o retorna;

        args.push(new Event(eventName));

        if (this._events[eventName] instanceof Array) {

            this._events[eventName].forEach(fn => {

                fn.apply(null, args);

            });

        }

    }

}