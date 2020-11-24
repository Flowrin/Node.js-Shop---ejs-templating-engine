const path = require('path');
const User = require('../models/user');
const express = require('express');
const authController = require('../controllers/auth');
const expValidator = require('express-validator');

const router = express.Router();

router.get('/login', authController.getLogin);

router.post(
  '/login',
  [
    expValidator
      .body('email')
      .isEmail()
      .withMessage('Invalid Email')
      .normalizeEmail(),
    expValidator.body('password').trim(),
  ],
  authController.postLogin
);

router.post('/logout', authController.postLogout);

router.get('/signup', authController.getSignup);

router.post(
  '/signup',
  [
    expValidator
      .check('email')
      .isEmail()
      .withMessage('Please enter valid email')
      .normalizeEmail()
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject('Email already exist');
          }
        });
      }),
    expValidator
      .body('password', 'Please enter a valid password with at least 5 chars')
      .isLength({ min: 5 })
      .isAlphanumeric(),
    expValidator.body('confirmPassword').custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords have to match');
      }
      return true;
    }),
  ],
  authController.postSignup
);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPaassword);

router.post('/newPassword', authController.postNewPaassword);

module.exports = router;
