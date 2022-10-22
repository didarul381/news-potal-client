import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Catagory from "../../pages/catagory/Catagory/Catagory";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/login/Login/Login";
import Register from "../../pages/login/Register/Register";
import News from "../../pages/News/News/News";
import Profiles from "../../pages/others/Profiles/Profiles";
import TramsAndCondition from "../../pages/others/TramsAndCondition/TramsAndCondition";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes=createBrowserRouter([
  {path:'/',element:<Main></Main>,children:[
     
    {path:'/',element:<Home></Home>,
    
    loader:()=>fetch('http://localhost:5000/news')
  
  },
     {path:'/catagory/:id',element:<Catagory></Catagory>,
       loader:({params})=>fetch(`http://localhost:5000/catagory/${params.id}`)
    },
     {path:'/news/:id',
      element:<PrivateRoute><News></News></PrivateRoute>,
      loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
    
     },
     {path:'/login',element:<Login></Login>},
     {path:'/register',element:<Register></Register>},
     {path:'/terms',element:<TramsAndCondition></TramsAndCondition>},
     {path:'/profile',element:<PrivateRoute><Profiles></Profiles></PrivateRoute>}

  ]}

])