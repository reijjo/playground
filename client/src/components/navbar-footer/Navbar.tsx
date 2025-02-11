import "./NavFooter.css";

export const Navbar = () => {
  return (
    <>
      <nav>
        <div className="wrapper nav-wrapper">
          <div className="nav-left">
            <h1>Playground</h1>
          </div>
          <div className="nav-center">
            <p>LOGIN / REGISTER</p>
          </div>
          <div className="nav-right">theme</div>
        </div>
      </nav>
    </>
  );
};
