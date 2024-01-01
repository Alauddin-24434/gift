
import { NavLink, Outlet } from 'react-router-dom';
import Friends from '../PagesDasboard/friends';
import DashboardProfile from '../DasboardProfile/Profile';
import Search from '../PagesDasboard/Search';

export const CategoryDashNav = () => {
    const navLink = (
        <>
            <li>
                <NavLink to="/dashboard" activeClassName="active" className="nav-link">
                    Friends
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/request" activeClassName="active" className="nav-link">
                    New Request
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/received" activeClassName="active" className="nav-link">
                    Received Request
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/visitor" activeClassName="active" className="nav-link">
                    New Visitor
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="max-w-5xl mx-auto bg-slate-200 mb-6 ">
            <nav>
                <ul className="flex flex-row gap-4 justify-around">{navLink}</ul>
            </nav>
        </div>
    );
};



// Import Friends component with correct path


const Sidebar = () => {
    return (
        <div className="grid grid-cols-12 gap-4">
            {/* Sidebar Header */}
            <div className="p-4 col-span-5 text-black bg-slate-200">
                <DashboardProfile />
            </div>

            {/* Profile Section */}
            <div className="px-4 col-span-7 bg-slate-200">
                {/* Navigation Links */}
                <Search />
                <CategoryDashNav />
                <Outlet />



            </div>
        </div>
    );
};

export default Sidebar;
