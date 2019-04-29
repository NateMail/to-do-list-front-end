
const onNavSignUp = function () {
  $('.signingUp').removeClass('hiding')
}

const onNavSignIn = function () {
  event.preventDefault()
  $('.signingIn').removeClass('hiding')
}

const onNavChangePass = function () {
  event.preventDefault()
  $('.passwordChange').removeClass('hiding')
}

module.exports = {
  onNavSignUp,
  onNavSignIn,
  onNavChangePass
}
