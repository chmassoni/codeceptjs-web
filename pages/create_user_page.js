const { I } = inject();
var validacao = require('assert')

module.exports = {

  fields: {
    userField: '#user',
    passwordField: '#password',
    emailAddressRegisterField: '#email'
  },

  buttons: {
    registerButton: '#btnRegister'
  },

  messages: {

  },

  labels: {
    createAnAccountLabel: '#login_area>div>div>div>div>h3'
  },

  fillFieldsCreateUser(user, email, password) {
    I.waitForElement(this.fields.userField, user)
    I.see('Cadastro de usuário')
    I.fillField(this.fields.userField, user)
    I.scrollTo(this.fields.passwordField)
    I.fillField(this.fields.emailAddressRegisterField, email)
    I.fillField(this.fields.passwordField, password)
    I.scrollPageToBottom()


  },

  createUser() {
    I.click(this.buttons.registerButton)
  }

}
