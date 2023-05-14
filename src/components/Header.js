import "./Header.css";
const Header = () => {
  return (
    <div className="nav-bar">
      <div className="container">
        <div className="left-content">
          <div className="logo">
            <div className="edyoda">EDYODA</div>
          </div>
          <select className="courses">
            <option value="" disabled selected>Courses</option>
            <option>Course 1</option>
            <option>Course 2</option>
            <option>Course 3</option>
          </select>
          <select className="courses">
            <option value="" disabled selected>Programs</option>
            <option>Program 1</option>
            <option>Program 2</option>
            <option>Program 3</option>
          </select>
        </div>
        <div className="left-content">
          <img className="icon-chevron-down" alt="" src="/search-icon.svg" />
          <div className="log-in">
            <button className="text6">Log in</button>
          </div>
          <button className="primary-button1">
            <b className="text9">join now</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
