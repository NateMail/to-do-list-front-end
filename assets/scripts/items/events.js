const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onNewItem = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
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

const onDone = function () {
  event.preventDefault()
  $('.card-title').toggleClass('crossed')
  $('.card-text').toggleClass('crossed')
}

const onEditItem = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  const data = getFormFields(event.target)
  console.log(`This is the id ${id}`)
  console.log(`This is the data  ${data}`)
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
  onHideItems,
  onDone
}
