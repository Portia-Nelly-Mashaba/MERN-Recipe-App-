import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    prepTime: {
        type: Number,
        required: true
    },
    servings: {
        type: Number,
        required: true
    },
    cookTime: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    userId: {
        type: String,
        required: true
    }
});

export default mongoose.model('Recipes', recipeSchema)
