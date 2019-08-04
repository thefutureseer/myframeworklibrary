(function(global, $) {
    
  var Greetr = function(firstName, lastName, language) {
      return new Greetr.init(firstName, lastName, language);   
  }
  var supportedLangs = ['en', 'es'];

  var greetings = {
    en: 'Hello',
    es: 'Hola'
  };


  var formalGreeting = {
    en: 'Greetings',
    es: 'Saludos'
  };
  
  var loggedMessages = {
    en: 'Logged in',
    es: 'Inecio sesion'
  }

  Greetr.prototype = {

    fullName : function() {
      return this.firstName + ' ' + this.lastName;
    },

    validate: function() {
      if (supportedLangs.indexOf(this.supportedLangs) === -1) {
      throw "Language not supported";
      }
    },

    greeting: function() {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },
    formalGreeting: function() {
      return formalGreeting[this.language] + ', ' + this.fullName();
    },
    greet: function(formal) {
      var msg;

//If undefined or Null it will be coerced to false 
    if (formal) {
      msg = this.formalGreeting();
    } else {
      msg = this.greeting()
    } 
    if (console) {
      console.log(msg);
    }
    return this;
    },

    log: function() {
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullName());
      }

      return this;
    },

    setLang: function(lang) {
      this.language = lang;

      this.validate(); 

      return this;
    }

  };
  
  Greetr.init = function(firstName, lastName, language) {
      
      var self = this;
      self.firstName = firstName || '';
      self.lastName = lastName || '';
      self.language = language || 'en';
      
  }
  
  Greetr.init.prototype = Greetr.prototype;
  
  global.Greetr = global.G$ = Greetr;
  
}(window, jQuery));