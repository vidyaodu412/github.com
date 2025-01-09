const Profile = ({ name, title, profilepic }) => {
  return (
    <>
      <div className="card">
        <img
          src={profilepic}
          className="card-img-top rounded-circle img-thumbnail "
          alt="profile "
        ></img>
        <div className="card-body bg-success">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{title}</p>
        </div>
      </div>
    </>
  );
};
export default Profile;
