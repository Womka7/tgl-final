const express = require('express');
const router = express.Router();
const CardController = require('../controllers/card');

router.get('/', CardController.getCards); 

router.post('/',CardController.createCard);

router.patch('/:id', CardController.updateCard);

router.put('/:id', CardController.upsertCard);

router.delete('/:id', CardController.deleteCard);

module.exports = router;

