import "./post.scss";

export default function Post() {
  return (
    <div className="post">
      <img
        src="https://dean2020.edu.vn/wp-content/uploads/2019/03/anh-thien-nhien-dep-3.jpeg"
        alt="anh post"
      />
      <div className="post-info">
        <div className="post-cats">
          <span className="post-cat">
            <a href="">Music</a>
          </span>
          <span className="post-cat">
            <a href="">Life</a>
          </span>
        </div>
        <span className="post-title">
          <a href=""> Lorem ipsum dolor sit amet</a>
        </span>
        <span className="post-date">1 hours ago</span>
      </div>
      <p className="post-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}
