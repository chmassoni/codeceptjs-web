const { generate, validate } = require('gerador-validador-cpf')

// var cpf = generate({ format: true })

// console.log(cpf)
// console.log(validate(cpf))

const cpfName = () => {
	var cpf = generate({ format: true })
	var cpfAndName = cpf + ' - João Silva'
	return cpfAndName
}

const soma = (num1, num2) => {
	var somatorio = num1 + num2
	return somatorio
}

exports.cpfName = cpfName
exports.soma = soma