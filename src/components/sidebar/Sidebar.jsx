import "./sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">ABOUT ME</span>
        <img
          src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/123795644_1876976129119938_1717053274022819800_n.jpg?_nc_cat=101&ccb=1-6&_nc_sid=174925&_nc_ohc=zmULZvcsSB8AX-kYj1U&_nc_ht=scontent.fdad2-1.fna&oh=00_AT_D_76dcD2H5Qn2MP6y8QCynvU0uxnmrtgbDZcWPw2Hgg&oe=629DDFAF"
          alt="img sidebar"
        />
        <p>Độc thân, vui tính và yêu màu hồng</p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">CATEGORIES</span>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <a href="">Life</a>
          </li>
          <li className="sidebar-list-item">
            <a href="">Music</a>
          </li>
          <li className="sidebar-list-item">
            <a href="">Style</a>
          </li>
          <li className="sidebar-list-item">
            <a href="">Sport</a>
          </li>
          <li className="sidebar-list-item">
            <a href="">Tech</a>
          </li>
          <li className="sidebar-list-item">
            <a href="">Cinema</a>
          </li>
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">FOLLOW US</span>
        <div className="sidebar-social">
          <i className="sidebar-social-icon fa-brands fa-facebook-square"></i>
          <i className="sidebar-social-icon fa-brands fa-twitter-square"></i>
          <i className="sidebar-social-icon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
