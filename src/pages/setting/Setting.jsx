import "./setting.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import avt from "../../asset/images/avt.jpg";
export default function Setting() {
  return (
    <div className="setting">
      <div className="setting-wrapper">
        <div className="setting-title">
          <span className="setting-title-update">UPDATE ACCOUNT</span>
          <span className="setting-title-delete">DELETE ACCOUNT</span>
        </div>
        <form className="setting-form">
          <label htmlFor="">Profile Picture</label>
          <div className="setting-picture">
            <img src={avt} alt="" />
            <label htmlFor="file-input">
              <i class="fa-solid fa-user-plus">
                <input
                  type="file"
                  id="file-input"
                  style={{ display: "none" }}
                  className="setting-inputfile"
                />
              </i>
            </label>
          </div>
          <div className="setting-input">
            <label>Username</label>
            <input type="text" placeholder="Minh Tri" name="name" />
            <label>Email</label>
            <input type="email" placeholder="minhtri@gmail.com" name="email" />
            <label>Password</label>
            <input type="password" placeholder="Password" name="password" />
          </div>
          <div className="setting-but">
            <button className="setting-button" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
