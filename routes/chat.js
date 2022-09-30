var express = require('express');
var router = express.Router();

const chatHandler = require("../app/chat")

// Trigger Chat
router.get('/', chatHandler.send);

module.exports = router;
