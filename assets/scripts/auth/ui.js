const store = require('./../store.js')

const signUpSuccess = function (data) {
  console.log('sign-up worked')
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
  console.log('sign-up failed')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  console.log('sign-in worked ')
  store.user = data.user
  $('form').trigger('reset')
}

const signInFailure = function (data) {
  console.log('sign-in failed')
  $('form').trigger('reset')
}

const changePasswordSuccess = function (data) {
  console.log('password change worked')
  $('form').trigger('reset')
}

const changePasswordFailure = function (data) {
  console.log('password failed to change')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  console.log('sign-out worked')
  store.user = null
}

const signOutFailure = function () {
  console.log('sign-out failed')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
