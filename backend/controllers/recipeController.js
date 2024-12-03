import Recipe from "../model/recipes.js";
import mongoose from "mongoose";

// const createRecipe = async (req, res) => {
//   try {
//     const newRecipe = await Recipe.create(req.body);
//     res.status(201).json(newRecipe);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ error: "An error occured while create the new recipe" });
//   }
// };

const createRecipe = async (req, res) => {
    try {
      const { userId, ...recipeData } = req.body; // Extract userId and recipe data
      if (!userId) {
        return res.status(400).json({ error: "User ID is required" });
      }
      const newRecipe = await Recipe.create({ ...recipeData, userId });
      res.status(201).json(newRecipe);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while creating the recipe" });
    }
  };

  const getRecipes = async (req, res) => {
    try {
        const userId = req.query.userId; // Extract userId from query parameters
        if (!userId) {
            return res.status(400).json({ error: "User ID is required" }); // Validate userId
        }

        const recipes = await Recipe.find({ userId }); // Filter recipes by userId
        res.status(200).json(recipes); // Return filtered recipes
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while fetching recipes" });
    }
};


const getSingleRecipe = async (req, res) => {
    try {
        const recipeId = req.params._id;
        if (!mongoose.Types.ObjectId.isValid(recipeId)) {
            return res.status(400).json({ error: "Invalid Recipe ID format" });
        }

        const recipe = await Recipe.findById(recipeId);
        if (!recipe) {
            return res.status(404).json({ error: "Recipe not found" });
        }

        res.status(200).json(recipe);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while fetching the recipe" });
    }
};

export default {
    createRecipe,
    getRecipes,
    getSingleRecipe
};
