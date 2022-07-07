const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const commentCtrl = require('../controllers/Comment.js');

router.post('/:id/comment', auth, commentCtrl.createComment);

module.exports = router; 