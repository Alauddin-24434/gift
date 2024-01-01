import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const CategoryData = () => {
  const navLink = (
    <>
      <li>
        <NavLink to="/search" activeClassName="active" className="nav-link items-center">
          <FiSearch className="inline-block mr-2" />
          Search
        </NavLink>
      </li>
      <li>
        <NavLink to="/social" activeClassName="active" className="nav-link items-center">
          <FaUsers className="inline-block mr-2" />
          Be Social
        </NavLink>
      </li>
      <li>
        <NavLink to="/chat" activeClassName="active" className="nav-link items-center">
          <BsChatDots className="inline-block mr-2" />
          Chat
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" activeClassName="active" className="nav-link items-center">
       <MdOutlineDashboardCustomize className="inline-block mr-2" />
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="max-w-5xl mx-auto bg-slate-200 mb-6 p-4">
      <nav>
        <ul className="flex flex-row gap-4 justify-around">{navLink}</ul>
      </nav>
    </div>
  );
};

export default CategoryData;
