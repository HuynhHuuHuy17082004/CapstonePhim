import { RouteObject } from "react-router-dom";
import { PATH } from "Constant";
import { AuthLayout, MainLayout, } from "components";
import { Home, Login, Register } from "pages";
import { Account } from "pages/Account";

export const router:RouteObject[] = [
    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                index:true,
                element : <Home />
            },
            {
                path : PATH.account,
                element: <Account />
            }
        ]
    },
   {
    element : <AuthLayout />,
    children :[
    {
        path:PATH.login,
        element : <Login/>
    },
    
    {
        path:PATH.register,
        element:<Register />    ,
    },

        ]
    }
]