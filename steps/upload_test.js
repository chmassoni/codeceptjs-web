Feature('Upload File');

Scenario('Fazer upload de imagem', ({ I }) => {
	I.amOnPage('/contact-two')
	I.fillField('//*[@id="contact_area"]/div/div/div[1]/div/form/div/div[1]/div/input', 'Teste')
    I.fillField('//*[@id="contact_area"]/div/div/div[1]/div/form/div/div[2]/div/input', 'teste@teste.com')
	I.fillField('//*[@id="contact_area"]/div/div/div[1]/div/form/div/div[3]/div/input', '19999999999')
	I.fillField('//*[@id="contact_area"]/div/div/div[1]/div/form/div/div[4]/div/input', 'Assunto teste')
    I.fillField('//*[@id="contact_area"]/div/div/div[1]/div/form/div/div[5]/div[1]/textarea', 'Mensagem teste contato')
    //I.attachFile('#fileUpload', 'images/imageTest.png')
    I.click('//*[@id="contact_area"]/div/div/div[1]/div/form/div/div[5]/div[2]/button')

});