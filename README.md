# Recipe App

This project is a **Recipe App** built using **Express**, **Node.js**, **MongoDB**, and **React.js**. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on recipes. It features user authentication and supports managing a collection of recipes with categories, images, and preparation details.

---

## Features

### Backend
- **Framework**: Express.js
- **Database**: MongoDB
- **Features**:
  - User authentication (registration and login).
  - CRUD operations for recipes.
  - Validation of recipe data (e.g., required fields, valid IDs).

### Frontend
- **Framework**: React.js
- **Styling**: Bootstrap
- **Features**:
  - User-friendly interface for managing recipes.
  - Image upload via Cloudinary.
  - Dynamic routing with React Router.

### Recipe Management
Users can:
1. **Add a New Recipe**: Fill out a form with details like name, ingredients, instructions, category, and image.
2. **View Recipes**: See a list of all saved recipes with summaries.
3. **Edit Recipes**: Update existing recipes.
4. **Delete Recipes**: Remove recipes they no longer need.

---

## Prerequisites
1. **Install Node.js**: Download Node.js from [here](https://nodejs.org/).
2. **Install MongoDB**: Set up a MongoDB instance locally or use a cloud provider like [MongoDB Atlas](https://www.mongodb.com/atlas).

---

## Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd recipe-app
```

### 2. Set Up the Backend
Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

#### Start the Backend Server
Ensure MongoDB is running, then start the backend server:
```bash
npm start
```
The backend server will be running at `http://localhost:8080`.

### 3. Set Up the Frontend
Navigate to the frontend directory and install dependencies:
```bash
cd frontend
npm install
```

#### Start the Frontend Server
```bash
npm start
```
The frontend application will be available at `http://localhost:3000`.

---

## API Endpoints

### Users
- **POST** `/user` - Register a new user.
- **POST** `/user/login` - Log in an existing user.

### Recipes
- **POST** `/recipes` - Add a new recipe.
- **GET** `/recipes` - Retrieve all recipes for a user.
- **GET** `/recipe/:id` - Retrieve a single recipe by ID.
- **PUT** `/recipes/:id` - Update a recipe by ID.
- **DELETE** `/recipes/:id` - Delete a recipe by ID.

---

## Example MongoDB Document

Here’s an example of a recipe document:
```json
{
  "_id": "64e92f3345e2a9bcbff45e3d",
  "userId": "64e8f9ab234123ad4a93212f",
  "name": "Spaghetti Bolognese",
  "ingredients": "spaghetti, ground beef, tomato sauce",
  "instructions": "Cook spaghetti. Brown the beef. Mix with sauce.",
  "category": "Dinner",
  "prepTime": "15",
  "servings": "4",
  "cookTime": "30",
  "imageUrl": "http://res.cloudinary.com/your-cloud-name/image/upload/v1732959545/example.jpg",
  "createdAt": "2024-12-19T10:23:45.123Z"
}
```

---

## How to Use

1. **Register/Login**:
   - Register a new account or log in with an existing one.

2. **Add Recipe**:
   - Navigate to the "Add Recipe" page and provide details like name, ingredients, instructions, and image.

3. **Edit Recipe**:
   - Click the edit button on a recipe card to modify its details.

4. **Delete Recipe**:
   - Click the delete button on a recipe card to remove it.

---

## Deployment

To deploy the app:
1. Use a cloud database like MongoDB Atlas.
2. Deploy the backend using a platform like Heroku, Vercel, or AWS.
3. Deploy the frontend using Netlify, Vercel, or another hosting service.

---

## Verification

1. Verify the backend is running:
   ```bash
   curl http://localhost:8080/api/v1/recipes
   ```

2. Verify the frontend is running:
   Open your browser and navigate to `http://localhost:3000`.

---

## Acknowledgments
- **Express** for backend routing.
- **MongoDB** for database management.
- **React.js** for a responsive frontend.
- **Cloudinary** for image uploads.

Feel free to contribute and improve this app!

