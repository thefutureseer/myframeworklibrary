(function(global, $) {
  var Greetr = function(firstName, lastName, language){
   return new Greetr.init(firstName, lastName, language);
}
var supportedLangs = ['en', 'es'];

var greetings = {
 en: 'Hello!',
 es: 'Hola!'
};
var formalGreetings = {
 en: 'Greetings!',
 es: 'Saludos'
};
var logMessages = {
  en: 'logged in',
  es: 'inicio sesion'
};

 Greetr.prototype = {};

 Greetr.init = function(firstName, lastName, language) {
   var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';
 }
 Greetr.init.prototype = Greetr.prototype;
 
 global.Greetr = global.G$ = Greetr;
}(window, jquery));