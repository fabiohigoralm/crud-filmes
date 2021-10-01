const express = require('express');
const {
  getAll, getById, postMovie, editMovie, deleteMovie,
} = require('../controllers/movieController');
const { jwtValidate } = require('../middlewares/jwtValidation');
const {
  favoriteAll, myFavorite, addFavorite, removeFavorite,
} = require('../controllers/favoriteController');

const router = express.Router();
router.use(jwtValidate);
router.delete('/myfavorites/:id', removeFavorite);
router.post('/myfavorites/:id', addFavorite);
router.get('/myfavorites', myFavorite);
router.get('/favorites', favoriteAll);
router.get('/:id', getById);
router.delete('/:id', deleteMovie);
router.put('/:id', editMovie);
router.post('/', postMovie);
router.get('/', getAll);

module.exports = router;
