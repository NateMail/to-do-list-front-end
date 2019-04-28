const upI = function () {
  const updateId = $(event.target).data('id')
  return updateId
}

const onUpdateItemModal = function () {
  document.querySelector('.bg-modal').style.display = 'flex'
}

const onModalClose = function () {
  document.querySelector('.bg-modal').style.display = 'none'
}
module.exports = {
  onUpdateItemModal,
  onModalClose,
  upI
}
