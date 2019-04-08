function check () {
  const loginTime = new Date(localStorage.getItem('loginTime'))
  const currentTime = new Date()
  const overTime = (currentTime - loginTime) / 1000 / 60
  if (overTime >= 60) {
    return false
  } else {
    return true
  }
}

export default check
