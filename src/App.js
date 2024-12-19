import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AddEditRecipe from "./pages/AddEditRecipe";
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoutes from "./components/ProtectedRoutes";
import SingleRecipe from "./pages/SingleRecipe";

// Custom layout component to conditionally render Header
const Layout = ({ children }) => {
  const location = useLocation();

  // Define paths where the header should be hidden
  const hideHeaderPaths = [
    "/login",
    "/register",
    "/add-recipe",
    "/edit",
    "/recipe",

  ];

  // Check if the current path matches or starts with any hideHeaderPath
  const shouldHideHeader = hideHeaderPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {!shouldHideHeader && <Header />}
      {children}
    </>
  );
};

function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return (
    <BrowserRouter>
      <ToastContainer />
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-recipe" element={<AddEditRecipe />} />
          <Route path="/edit/:id" element={<AddEditRecipe />} />
          <Route path="/recipe/:id" element={<SingleRecipe />} />
          {/* <Route
            path="/home"
            element={
              <ProtectedRoutes
                isAuthenticated={isAuthenticated}
                element={<Home />}
              />
            }
          /> */}
          

          {/* <Route
            path="/add-recipe"
            element={
              <ProtectedRoutes
                isAuthenticated={isAuthenticated}
                element={<AddEditRecipe />}
              />
            }
          /> */}

          {/* <Route
            path="/edit/:id"
            element={
              <ProtectedRoutes
                isAuthenticated={isAuthenticated}
                element={<AddEditRecipe />}
              />
            }
          /> */}

          {/* <Route
            path="/recipe/:id"
            element={
              <ProtectedRoutes
                isAuthenticated={isAuthenticated}
                element={<SingleRecipe />}
              />
            }
          /> */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
