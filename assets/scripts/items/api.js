const store = require('../store')
const config = require('../config.js')

const createItem = function (data) {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'POST',
    headers: {Authorization: 'Token token=' + store.user.token},
    data: {
      item: {
        'title': `${data.item.title}`,
        'description': `${data.item.description}`
      }
    }
  })
}

const getItems = function () {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'GET',
    headers: {Authorization: 'Token token=' + store.user.token}
  })
}

const updateItem = function (id, data) {
  return $.ajax({
    url: config.apiUrl + `/items/${id}`,
    method: 'PATCH',
    headers: {Authorization: 'Token token=' + store.user.token},
    data: {
      item: {
        'title': `${data.item.title}`,
        'description': `${data.item.description}`
      }
    }
  })
}

const destroyItem = function (id) {
  return $.ajax({
    url: config.apiUrl + `/items/${id}`,
    method: 'DELETE',
    headers: {Authorization: 'Token token=' + store.user.token}
  })
}
module.exports = {
  createItem,
  getItems,
  updateItem,
  destroyItem
}
