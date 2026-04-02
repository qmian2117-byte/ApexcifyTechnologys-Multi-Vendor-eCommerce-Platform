const express = require('express');
const authController = require('../controllers/authController');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

router.post('/login', (req, res) => authController.login(req, res));
router.post('/register', (req, res) => authController.register(req, res));
router.get('/profile', requireAuth, (req, res) => authController.getProfile(req, res));
router.put('/profile', requireAuth, (req, res) => authController.updateProfile(req, res));
router.put('/change-password', requireAuth, (req, res) => authController.changePassword(req, res));

module.exports = router;
