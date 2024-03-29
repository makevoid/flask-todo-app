const checkboxChecked = async (evt) => {
  const elem = evt.target
  if (elem.tagName !== "INPUT") return
  const todoId = elem.dataset.id
  const req = await axios.post(`/todos/${todoId}/check`, {})
  data = req.data
  elem.checked = data.checked
}

const checkboxes = () => {
  let elems = document.querySelectorAll(".checkbox-elem")
  elems = Array.from(elems)
  return elems
}

const onDomLoad = () => {
  const elems = checkboxes()
  elems.forEach((checkbox) => {
    checkbox.addEventListener('click', checkboxChecked)
  })
}

const main = () => {
  document.addEventListener("DOMContentLoaded", onDomLoad)
}

main()
