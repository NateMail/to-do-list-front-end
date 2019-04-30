
const onNavSignUp = function () {
  $('.signing-up').removeClass('hiding')
  $('#sign-up-nav-button').hide()
}

const onNavSignIn = function () {
  event.preventDefault()
  $('.signing-in').removeClass('hiding')
  $('#sign-in-nav-button').hide()
}

const onNavChangePass = function () {
  event.preventDefault()
  $('.password-change').removeClass('hiding')
}

module.exports = {
  onNavSignUp,
  onNavSignIn,
  onNavChangePass
}
