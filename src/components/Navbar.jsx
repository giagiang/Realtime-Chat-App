import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = UserAuth();
  const handleLogout = async () => {
    try { 
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar fixed z-50 bg-primary text-primary-content">
      <div className="containerWrap flex justify-between ">
        <a className="btn btn-ghost normal-case text-xl">RealTime ChatApp</a>
        {currentUser ? <button onClick={handleLogout}>Logout</button> : ""}
      </div>
    </div>
  );
};

export default Navbar;
