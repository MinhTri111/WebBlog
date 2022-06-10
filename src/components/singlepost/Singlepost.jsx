import "./Singlepost.scss";

export default function Singlepost() {
  return (
    <div className="singlepost">
      <img
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        className="singlepost-img"
      />
      <h1 className="singlepost-title">
        Lorem ipsum dolor sit.
        <div className="singlepost-edit">
          <i className="singlepost-icon far fa-edit"></i>
          <i className="singlepost-icon far fa-trash-alt"></i>
        </div>
      </h1>
      <div className="singlepost-info">
        <span>
          <b className="singlepost-author">Author: Tri</b>
        </span>
        <span>1 hours ago</span>
      </div>
      <p className="singlepost-content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo enim quis
        harum voluptatem deserunt aut sed possimus nisi mollitia. Consequatur
        officiis labore laborum voluptate dicta corrupti earum eveniet
        voluptatem dolorem. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Nemo enim quis harum voluptatem deserunt aut sed possimus nisi
        mollitia. Consequatur officiis labore laborum voluptate dicta corrupti
        earum eveniet voluptatem dolorem. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Nemo enim quis harum voluptatem deserunt
        aut sed possimus nisi mollitia. Consequatur officiis labore laborum
        voluptate dicta corrupti earum eveniet voluptatem dolorem. Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Nemo enim quis harum
        voluptatem deserunt aut sed possimus nisi mollitia. Consequatur officiis
        labore laborum voluptate dicta corrupti earum eveniet voluptatem
        dolorem.
      </p>
    </div>
  );
}
