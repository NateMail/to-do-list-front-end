const store = require('./../store.js')

const signUpSuccess = function (data) {
  $('form').trigger('reset')
  $('.messaging').text('You signed up Successfully!')
  setTimeout(function () {
    $('.messaging').text('')
  }, 2000)
}

const signUpFailure = function (data) {
  $('form').trigger('reset')
  $('.messaging').text('Sign up failed. Please try again.')
  setTimeout(function () {
    $('.messaging').text('')
  }, 2000)
}

const signInSuccess = function (data) {
  store.user = data.user
  $('form').trigger('reset')
  $('.messaging').text('You signed in Successfully!')
  setTimeout(function () {
    $('.messaging').text('')
  }, 2000)
  $('.shown').removeClass('hidden')
}

const signInFailure = function (data) {
  $('form').trigger('reset')
  $('.messaging').text('Sign in failed. Please try again.')
  setTimeout(function () {
    $('.messaging').text('')
  }, 2000)
}

const changePasswordSuccess = function (data) {
  $('form').trigger('reset')
  $('.messaging').text('You changed your password Successfully!')
  setTimeout(function () {
    $('.messaging').text('')
  }, 2000)
}

const changePasswordFailure = function (data) {
  $('form').trigger('reset')
  $('.messaging').text('Something went wrong please try again.')
  setTimeout(function () {
    $('.messaging').text('')
  }, 2000)
}

const signOutSuccess = function () {
  store.user = null
  $('.messaging').text('You signed out Successfully!')
  setTimeout(function () {
    $('.messaging').text('')
  }, 2000)
  $('.shown').addClass('hidden')
}

const signOutFailure = function () {
  $('form').trigger('reset')
  $('.messaging').text('Sign out failed. Please try again.')
  setTimeout(function () {
    $('.messaging').text('')
  }, 2000)
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
