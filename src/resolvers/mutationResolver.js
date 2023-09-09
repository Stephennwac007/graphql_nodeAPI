import authController from '../controllers/auth.js';

export default {
  // Auth
  signupUser: authController.signup,
  loginUser: authController.login,
};

