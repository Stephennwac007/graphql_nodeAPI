import { AuthenticationError } from 'apollo-server-core';
import errorHandler from '../controllers/errorHandler.js';

const checkIsLoggedIn = async (req, getAuthUser) => {
  try {
    // Check if user is logged in
    const authUser = await getAuthUser(req);

    if (!authUser) {
      throw new AuthenticationError('You are not logged in');
    }
  } catch (error) {
    errorHandler(error);
    console.log("here is fucked");
  }
};

export default checkIsLoggedIn;

