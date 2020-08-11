function responseWith404(req, res) {
  const notFoundObj = {
    "message": "Requested path not found",
  }
  res.status(404).json(notFoundObj);
}

module.exports = responseWith404;