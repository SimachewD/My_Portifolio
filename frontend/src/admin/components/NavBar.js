import { Link } from "react-router-dom";

const NavBar = () => {
    return (
            <nav className="bg-gray-800 p-4 mb-12 text-white">
                
                <ul className="flex justify-center space-x-4">
                    <li>
                        <Link to="/admin">Home</Link>
                    </li>
                    <li>
                        <Link to="/admin/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/admin/skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/admin/about">About Me</Link>
                    </li>
                    <li>
                        <Link to="/admin/messages">Messages</Link>
                    </li>
                </ul>
            </nav>
    );
};

export default NavBar;
