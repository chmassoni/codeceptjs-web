const { I } = inject();

module.exports = {

  fields:{

  },

  button:{
    loginButton: '.fa-lock'
  },

  messages:{

  },

  accessLoginPage(){
    I.waitForElement(this.button.loginButton)
    I.click(this.button.loginButton)
  }

}
