import express from 'express';
import {
  userSignUp,
  userSignUpWithService,
  forgetPassword,
  resetPassword,
  userSignIn,
} from './controller';

const router = express.Router();

router.post('/forget', forgetPassword, (req, res) => {
  res.status(200).json({ success: true, detail: 'Mail for reset Sent Successfully' });
});

router.post('/reset', resetPassword, (req, res) => {
  res.status(200).json({ success: true, detail: 'Password reset successfully' });
});

router.post('/signup', userSignUp, (req, res) => {
  res.status(200).json({
    success: true,
    detail: 'Sign Up Successfully',
    token: req.token,
  });
});

router.get('/signup/:service/:id', userSignUpWithService, (req, res) => {
  res.status(200).json({
    success: true,
    detail: 'Sign Up Successfully',
    token: req.token,
  });
});

router.post('/signin', userSignIn, (req, res) => {
  res.status(200).json({
    detail: 'Successfully Logged In',
    auth: true,
    token: req.token,
  });
});

export default router;
