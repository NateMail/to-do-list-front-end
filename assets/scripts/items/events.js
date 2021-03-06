const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onNewItem = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createItem(data)
    .then(ui.onCreateItemSuccess)
    .catch(ui.onCreateItemFailure)
}

const onShowItems = function () {
  event.preventDefault()
  $('.content').show()
  api.getItems()
    .then(ui.onGetItemsSuccess)
    .catch(ui.onGetItemsFailure)
}

const onHideItems = function () {
  event.preventDefault()
  $('.content').hide()
}

const onEditItem = function (event) {
  event.preventDefault()
  $('.modal-open').removeClass()
  $('.fade').hide()
  const id = $(event.target).data('id')
  const data = getFormFields(event.target)
  api.updateItem(data, id)
    .then(ui.onUpdateItemSuccess)
    .catch(ui.onUpdateItemFailure)
}

const onItemDestroy = function () {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.destroyItem(id)
    .then(ui.onDestroyItemSuccess)
    .catch(ui.onDestroyItemFailure)
}
module.exports = {
  onNewItem,
  onShowItems,
  onEditItem,
  onItemDestroy,
  onHideItems
}
