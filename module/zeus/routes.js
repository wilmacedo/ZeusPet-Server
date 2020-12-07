const express = require('express');
const router = express.Router();

const {
    all,
    findById,
    findLastItem,
    save,
    remove,
    removeItem
} = require('./controller');

router.get('/', all);
router.get('/:id', findById);
router.post('/', save);
router.put('/:id/:petId', save);
router.put('/:id/:petId/:itemId', removeItem);
router.delete('/:id', remove)
router.get('/items/last', findLastItem);

module.exports = router;