const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          Navbar{" "}
          <span className="badge rounded-pill text-bg-secondary">
            {totalCounters}
          </span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
