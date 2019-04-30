
const onNavSignUp = function () {
  $('.signing-up').removeClass('hiding')
}

const onNavSignIn = function () {
  event.preventDefault()
  $('.signing-in').removeClass('hiding')
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
