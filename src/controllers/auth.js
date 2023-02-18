import authService from '../services/auth.js';

export async function signUp(req, res, next) {
    const { email, password, name } = req.body;
    try {
      const user = await authService.signUp(email, password);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({error: error});
    }
  }
  
  export async function signIn(req, res, next) {
    const { email, password } = req.body;
    try {
      const user = await authService.signIn(email, password);
      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(400).json({error: error});
    }
  }

  export async function signInWithProviderAndCreateUser(req, res ,next) {
    const {userCredential} = req.body;
    try {
      const user = await authService.signInWithProviderAndCreateUser(userCredential);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
  
export default {
    signUp,
    signIn,
    signInWithProviderAndCreateUser
  }