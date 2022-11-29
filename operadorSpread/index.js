const person = ['qualidade1', 'qualidade2', 'qualidade3']
const personClone = [...person]

console.log(personClone)
personClone.push('Teste')

console.log(person, personClone)
