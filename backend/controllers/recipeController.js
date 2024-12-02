import Recipe from "../model/recipes.js";

const createRecipe = async (req, res) => {
  try {
    const newRecipe = await Recipe.create(req.body);
    res.status(201).json(newRecipe);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occured while create the new recipe" });
  }
};

const getRecipes  = async (req, res) => {
    try {
        const {page = 1, limit = 5} = req.query;
        const skip = (page - 1) * limit;
        const recipes = await Recipe.find().skip(skip).limit(limit)

        const totalRecipes = await Recipe.countDocuments()

        res.status(200).json({recipes, totalRecipes, page, limit})
    
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "An error ocured while fetching recipes"})
    }
}

const getSingleRecipe = async (req, res) => {
    try {
        const recipeId = await req.params.id
        const recipe = await Recipe.findById(recipeId)
        res.status(200).json(recipe)
    } catch (error){
        if(error.kind === 'ObjectId'){
            res.status(400).json({error: "Invalid Recipe ID"})
        } else {
            return res.status(500).json({error: "An error occured while fetching the recipe"})
        }
    }
}

export default {
    createRecipe,
    getRecipes,
    getSingleRecipe
};
