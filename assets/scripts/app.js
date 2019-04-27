'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const auth = require('./auth/events.js')
const item = require('./items/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', auth.onSignUp)
  $('#sign-in').on('submit', auth.onSignIn)
  $('#change-password').on('submit', auth.onChangePassword)
  $('#sign-out').on('submit', auth.onSignOut)
  $('#make_item').on('submit', item.onNewItem)
  $('#show_items').on('click', item.onShowItems)
})
