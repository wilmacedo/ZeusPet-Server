const express = require('express');
const router = express.Router();

const {
    all,
    findById,
    save,
    remove,
    removeItem
} = require('./controller');

router.get('/', all);
router.get('/:id', findById);
router.post('/', save);
router.put('/:id/:petId', save);
router.put('/:id/:petId/:itemId', removeItem);
router.delete('/:id', remove);

module.exports = router;