import "./write.scss";

export default function Write() {
  return (
    <div className="write">
      <img
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        className="write-img"
      />
      <form className="write-form">
        <div className="write-formgroup">
          <label htmlFor="fileInput">
            <i className="write-icon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="write-input"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="write-formgroup">
          <textarea
            className="write-input write-text"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="write-submit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
