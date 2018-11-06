let nome = 'Spider Cop'
let email = 'spider_cop@protonmail.com'
let emailConfirma = 'spider_cop@protonmail.com'
let cidade = 'New York'
let estado = 'SP'
let faculdade = 'ESU'
let nomeProfessor = 'Xavier'
let emailProfessor = 'anrobits@yahoo.com.br'

function fillSignUpForm () {
  document.getElementById('nome').value = nome
  document.getElementById('email').value = email
  document.getElementById('email_confirma').value = emailConfirma
  document.getElementById('cidade').value = cidade
  document.getElementById('estado').value = estado
  document.getElementById('faculdade').value = faculdade
  document.getElementById('nome_professor').value = nomeProfessor
  document.getElementById('email_professor').value = emailProfessor
  document.getElementsByClassName('submit')[0].click()
}

fillSignUpForm()
// window.location = 'http://www.josedornelas.com.br/game-01-quiz/'
// window.location = 'http://www.josedornelas.com.br/game/responder.php?p=1&r=1'
// window.location = 'http://www.josedornelas.com.br/game-02-quiz/'
// window.location = 'http://www.josedornelas.com.br/game/finalizar.php'
