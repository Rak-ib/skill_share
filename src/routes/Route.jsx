import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/home/Home";
import SignUp from "../authe/SignUp";
import LogIn from "../authe/LogIn";
import ErrorPage from "../shared/ErrorPage";
import Profile from "../shared/Profile";
import CourseDetails from "../page/course/CourseDetails";
import Demo from "../shared/Demo";
import PrivateRoute from "./PrivateRoute";
import Dashbord from "../layout/Dashbord";
import Procedure from "../page/dashboard/procedure/Procedure";
import Apply from "../page/dashboard/apply/Apply";
import Admin from "../page/dashboard/admin/Admin";
import AddCourse from "../page/dashboard/addcourse/AddCourse";
import CourseStatus from "../page/dashboard/coursestatus/CourseStatus";
import Create from "../page/dashboard/addcourse/Create";
import YourCourse from "../page/dashboard/yourcoursedetails/YourCourse";

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
        },
        {
          path:'/course/:course_id',
          element:<CourseDetails ></CourseDetails>,
          loader: ()=>fetch('AllCourses.json')
        },
        {
           path:'/demo',
           element:<Demo></Demo>
        },
        {
          path:'addnewcourse/:id',
          element:<Create></Create>,
          loader: ({params}) => fetch(`http://localhost:5000/applyadmin/${params.id}`)
        }
      ]
    },
    //For Dashbord
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashbord></Dashbord></PrivateRoute>,
      children: [
        // normal user routes
         {
          path: 'procedure',
          element: <Procedure></Procedure>
         },
        {
          path: 'apply',
          element: <Apply></Apply>
        },
        {
          path: 'admin',
          element: <Admin></Admin>
        },
        {
          path: 'addcourse',
          element: <AddCourse></AddCourse>,
        },
        {
          path: 'coursestatus',
          element: <CourseStatus></CourseStatus>
        },
        {
          path: 'coursesetauls',
          element: <YourCourse></YourCourse>
        },
       

        // // admin only routes
        // {
        //   path: 'adminHome',
        //   element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        // },
        // {
        //   path: 'addItems',
        //   element: <AdminRoute><AddItems></AddItems></AdminRoute>
        // },
        // {
        //   path: 'manageItems',
        //   element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        // },
        // {
        //   path: 'updateItem/:id',
        //   element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        //   loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        // },
        // {
        //   path: 'users',
        //   element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        // }

      ]
    }
  ]);
  export default router;