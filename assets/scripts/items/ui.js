const store = require('../store.js')
const showItemsTemplate = require('./../templates/helpers/item-listing.handlebars')

const onCreateItemSuccess = function (data) {
  console.log('Item was created')
  $('form').trigger('reset')
  store.item = data.item
  console.log(data)
}

const onCreateItemFailure = function (data) {
  console.log('Item was not created')
}

const onGetItemsSuccess = function (data) {
  console.log('Item was found')
  console.log(data)
  const showItemsHtml = showItemsTemplate({ items: data.items })
  $('.content').html(showItemsHtml)
}

const onGetItemsFailure = function (data) {
  console.log('Item was not found')
}

const onUpdateItemSuccess = function (data) {
  console.log('Item was updated')
  $('form').trigger('reset')
  store.item = data.item
  console.log(data)
}

const onUpdateItemFailure = function (data) {
  console.log('Item was not updated')
}

const onDestroyItemSuccess = function () {
  console.log('item was deleted')
  $('.content').empty()
}

const onDestroyItemFailure = function () {
  console.log('item was not destroyed')
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
