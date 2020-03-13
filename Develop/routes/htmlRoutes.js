const router = require('express').Router()

router.get('/', (req, res) =>
  res.sendFile(path.join('index.html'));
)