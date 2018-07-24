export default {
  async googleCallback(req, res) {
    return res.redirect('/')
  },

  async logout(req, res) {
    req.logout()
    return res.redirect('/')
  },

  async currentUser(req, res) {
    return res.send(req.user)
  }
}
