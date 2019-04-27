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
  api.getItems()
    .then(ui.onGetItemsSuccess)
    .catch(ui.onGetItemsFailure)
}

module.exports = {
  onNewItem,
  onShowItems
}
