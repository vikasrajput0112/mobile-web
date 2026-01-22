import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-pinkSoft p-4 flex justify-between">
    <h1 className="text-pinkPrimary font-bold text-xl">MobileHub</h1>
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/support">Support</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  </nav>
);

export default Navbar;
