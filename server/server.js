module.exports = {

	// bootstrap: function () {
	// 	console.log('Isso executou ANTES do projeto todo.')
	// },
	// teardown: function () {
	// 	console.log('Isso executou DEPOIS do projeto todo.')
	// }

	start: function () {
		console.log('Isso executou ANTES do projeto todo.')
	},
	stop: function () {
		console.log('Isso executou DEPOIS do projeto todo.')

	}
}