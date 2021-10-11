class WhatsAppController {

    constructor() {

        console.log('WhatsAppController OK');

        this.elementsPrototype();
        this.loadElements();

    }

    loadElements() {
        /*declara ID por ID com o forEach sobre cada um, e usa o 
        Format.getCamelCase para transformar os ID's em Camel Case */
        this.el = {};

        document.querySelectorAll('[id]').forEach(element => {

            this.el[Format.getCamelCase(element.id)] = element;

        });
    }

    elementsPrototype() {
        //adiciona a função hide para todos os ID's
        Element.prototype.hide = function() {
            this.style.display = 'none';
            return this;
        }

        //adiciona a função show para todos os ID's
        Element.prototype.show = function() {
            this.style.display = 'block';
            return this;
        }

        //adiciona a função toggle para todos os ID's
        Element.prototype.toggle = function() {
            this.style.display = (this.style.display === 'none') ? 'block' : 'none';
            return this;
        }

        //cria o evento dinamico de acordo com o que for passado como parametro
        Element.prototype.on = function(events, fn) {
            events.split(' ').forEach(event => {
                
                this.addEventListener(event, fn);

            });
            return this;
        }

        Element.prototype.css = function (styles) {
            for (let name in styles) {
                this.style[name] = styles[name];
            }
            return this;
        }

        Element.prototype.addClass = function (name) {
            this.classList.add(name);
            return this;
        }

        Element.prototype.removeClass = function (name) {
            this.classList.remove(name);
            return this;
        }

        Element.prototype.toggleClass = function (name) {
            this.classList.toggle(name);
            return this;
        }

        Element.prototype.hasClass = function (name) {
            return this.classList.contains(name);
        }

    }

}