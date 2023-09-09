import authController from '../controllers/auth.js';
import userController from '../controllers/user.js';

export default {
  // Users
  getMe: userController.getMe,
  // Auth
  refreshAccessToken: authController.refreshAccessToken,
  logoutUser: authController.logoutHandler,
};

