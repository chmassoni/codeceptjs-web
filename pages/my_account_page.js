const { I } = inject();

module.exports = {

  buttons:{
    userNamebutton: '#userLogged'
  },

  validateUserLogged(name, lastName){
     I.waitForElement(this.buttons.userNamebutton)
	   I.see(`${name} ${lastName}`)
  }

}
