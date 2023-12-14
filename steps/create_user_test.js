var validacao = require('assert')
var {faker} = require('@faker-js/faker');

const {I, home_page, create_user_page, my_account_page} = inject()

Feature('Create User');


Scenario('Login with sucess', async ({login}) => {

    await login('user')
});

Scenario('Create a New User', () => {

	var name = faker.person.firstName();
	var lastName = faker.person.lastName();
    
	console.log(`${name} ${lastName}`)
    
	I.amOnPage('error')

	// home
	home_page.accessLoginPage()

	// create user

	create_user_page.fillFieldsCreateUser(`${name} ${lastName}`, faker.internet.email(), secret('123456') );
	create_user_page.createUser();

    // my_account
    my_account_page.validateUserLogged(name, lastName)

});
