import express from 'express'
import recipeController from '../controllers/recipeController.js'
import usersController from '../controllers/usersController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router()

router.post('/user', usersController.registerUser)
router.post('/user/login', usersController.loginUser)
router.post('/recipes', protect, recipeController.createRecipe)
router.get('/recipes', protect, recipeController.getRecipes)
router.get('/recipe/:id', protect, recipeController.getSingleRecipe)


export default router;