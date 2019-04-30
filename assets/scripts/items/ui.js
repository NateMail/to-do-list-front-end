const store = require('../store.js')
const showItemsTemplate = require('./../templates/helpers/item-listing.handlebars')

const onCreateItemSuccess = function (data) {
  $('form').trigger('reset')
  store.item = data.item
  $('.messaging').text('New item created check your list!')
  setTimeout(function () {
    $('.messaging').text('')
  }, 2000)
  $('.content').hide()
}

const onCreateItemFailure = function (data) {
  $('.messaging').text('Something went wrong item was not created.')
  setTimeout(function () {
    $('.messaging').text('')
  }, 2000)
}

const onGetItemsSuccess = function (data) {
  const showItemsHtml = showItemsTemplate({ items: data.items })
  $('.content').html(showItemsHtml)
  if (data.items.length === 0) {
    $('.messaging').text('Add an item to the list!')
    setTimeout(function () {
      $('.messaging').text('')
    }, 2000)
  }
}

const onGetItemsFailure = function (data) {
  $('.messaging').text('Something went wrong list items were not found.')
  setTimeout(function () {
    $('.messaging').text('')
  }, 2000)
}

const onUpdateItemSuccess = function (data) {
  $('form').trigger('reset')
  store.item = data.item
  $('.messaging').text('Item was updated check your list!')
  setTimeout(function () {
    $('.messaging').text('')
  }, 2000)
  const showItemsHtml = showItemsTemplate({ items: data.items })
  $('.content').html(showItemsHtml)
}

const onUpdateItemFailure = function (data) {
  $('.messaging').text('Something went wrong item was not updated!')
  setTimeout(function () {
    $('.messaging').text('')
  }, 2000)
}

const onDestroyItemSuccess = function () {
  $('.messaging').text('Item was deleted check your list!')
  setTimeout(function () {
    $('.messaging').text('')
  }, 2000)
  $('.content').empty()
}

const onDestroyItemFailure = function () {
  $('.messaging').text('Something went wrong item was not deleted.')
  setTimeout(function () {
    $('.messaging').text('')
  }, 2000)
}

module.exports = {
  onCreateItemSuccess,
  onCreateItemFailure,
  onGetItemsSuccess,
  onGetItemsFailure,
  onUpdateItemSuccess,
  onUpdateItemFailure,
  onDestroyItemSuccess,
  onDestroyItemFailure
}
