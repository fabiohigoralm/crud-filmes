const express = require('express');
const { jwtValidate } = require('../middlewares/jwtValidation');
const {
  findAllUser, findMyId, editMyId, editAdmId, deleteUser, deleteAdmUser,
} = require('../controllers/userController');

const router = express.Router();
router.use(jwtValidate);
router.get('/', findAllUser);
router.get('/myprofile', findMyId);
router.put('/myprofile/', editMyId);
router.put('/profile/:id', editAdmId);
router.delete('/myprofile/', deleteUser);
router.delete('/profile/:id', deleteAdmUser);

module.exports = router;
