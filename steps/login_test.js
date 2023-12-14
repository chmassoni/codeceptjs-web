var validacao = require('assert')
var { faker } = require('@faker-js/faker');
const { I } = inject()
const cpfName = require('../utils/cpf_name');

Feature('Login');

BeforeSuite(()=> {
	console.log('Antes de tudo')
	console.log(cpfName.cpfName())
	console.log(cpfName.soma(3,5))
})

Before(()=> {
	I.amOnPage('error')

})

After(()=> {
	console.log('After')

})

AfterSuite(()=> {
	console.log('Depois de tudo')

})

Scenario('Validate Empty name On Create Account', async ({ I }) => {

	I.waitForElement('.fa-lock',10)
	I.click('.fa-lock')
	//I.fillField('#user','teste@teste.com')
	I.waitForElement('#btnRegister',10)
	I.click('#btnRegister')
	var title = await I.grabTitle()
	validacao.equal(title, 'QAZANDO Shop E-Commerce')
	var tituloPrincipal = await I.grabTextFrom('#login_area>div>div>div>div>h3')
	validacao.equal(tituloPrincipal, 'Cadastro de usuário')
	//I.see('Cadastro de usuário')
	I.see('O campo nome deve ser prenchido')

});

Scenario('Validate Empty name On Create Account 2', async ({ I }) => {
	I.click('.fa-lock')

});

Scenario('Validate Empty name On Create Account 3', async ({ I }) => {
	I.click('.fa-lock')

});
