import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Search from "../pages/Search/Search";
import Sidebar from "../Components/Dashboard/Sidebar/Sidebar";
import Friends from "../Components/Dashboard/PagesDasboard/friends";
import Request from "../Components/Dashboard/PagesDasboard/Request";
import Received from "../Components/Dashboard/PagesDasboard/Received";
import Visitor from "../Components/Dashboard/PagesDasboard/Visitor";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/search',
                element: <Search />
            },
           
         
            {
                path: '/dashboard',
                element: <Sidebar />,
                children: [
                    {
                        path: '/dashboard', // Updated the path to '/' for the default dashboard page
                        element: <Friends />
                    },
                    {
                        path: '/dashboard/request', // Updated the path to '/' for the default dashboard page
                        element: <Request/>
                    },
                    {
                        path: '/dashboard/received', // Updated the path to '/' for the default dashboard page
                        element: <Received/>
                    },
                    {
                        path: '/dashboard/visitor', // Updated the path to '/' for the default dashboard page
                        element:<Visitor/>
                    }
                ]
            }
        ]
    }
])
