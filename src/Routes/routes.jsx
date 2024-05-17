import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";
import RegisterProtect from "../Components/RegisterProtect";
import CategoryLoader from "../Loader/CategoryLoader";
import HomeBookLoader from "../Loader/HomeBookLoader";
import AddBook from "../Pages/Add-Book/AddBook";
import AllBooks from "../Pages/All-Books/AllBooks";
import BookDetails from "../Pages/Book-Details/BookDetails";
import BorrowedBooks from "../Pages/Borrowed-Books/BorrowedBooks";
import CategoryPage from "../Pages/Category-Page/CategoryPage";
import ErrorPage from "../Pages/Error-Page/ErrorPage";
import Home from "../Pages/Home/Home";
import Layout from "../Pages/Layout/Layout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UpdateBook from "../Pages/Update-Book/UpdateBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: HomeBookLoader,
      },
      {
        path: "book-details/:id",
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-books",
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/categories/:name",
        element: (
          <PrivateRoute>
            <CategoryPage></CategoryPage>
          </PrivateRoute>
        ),
        loader: CategoryLoader,
      },
      {
        path: "/add-book",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-book/:id",
        element: (
          <PrivateRoute>
            <UpdateBook></UpdateBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/borrowed-books",
        element: (
          <PrivateRoute>
            <BorrowedBooks></BorrowedBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <RegisterProtect>
            <Login></Login>
          </RegisterProtect>
        ),
      },
      {
        path: "/register",
        element: (
          <RegisterProtect>
            <Register></Register>
          </RegisterProtect>
        ),
      },
    ],
  },
]);

export default router;
