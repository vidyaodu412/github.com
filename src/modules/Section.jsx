import Profile from "./Profile";

const Section = ({ content }) => {
  return (
    <>
      <div className="container mt-5">
        {content.map((rowContent, rowIndex) => (
          <div className="row" key={rowIndex}>
            {rowContent.map((cellContent, colIndex) => (
              <div className="col-12 col-md-4" key={colIndex}>
                <Profile
                  name={cellContent.name}
                  title={cellContent.title}
                  profilepic={cellContent.profilepic}
                ></Profile>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
export default Section;
