import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/home/Home";
import SignUp from "../authe/SignUp";
import LogIn from "../authe/LogIn";
import ErrorPage from "../shared/ErrorPage";
import Profile from "../shared/Profile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
          path:'/login',
          element:<LogIn></LogIn>
        },
        {
          path:'/profile',
          element:<Profile></Profile>
        }
      ]
    },
  ]);
  export default router;