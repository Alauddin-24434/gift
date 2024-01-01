import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";

import Home from "../pages/Home/Home";

import CategoryData from "../Components/Categories/CategoryData";


const MainLayout = () => {
    return (
        <div className=" max-w-5xl mx-auto p-4">
            <Navbar />
            <CategoryData />
            <Outlet />
            <Home />

        </div>
    );
};

export default MainLayout;