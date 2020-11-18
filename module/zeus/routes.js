const express = require('express');
const router = express.Router();

const { 
    all,
    findById,
    findLastItem,
    save,
    remove
} = require('./controller');

router.get('/', all);
router.get('/:id', findById);
router.post('/', save);
router.put('/:id', save);
router.delete('/:id', remove);
router.get('/items/last', findLastItem);

module.exports = router;