import Profile from "./Profile";

const Hero = () => {
  return (
    <>
      <div className="App container">
        <h1 className="my-4">Web development Training</h1>

        <div className="row justify-content-center">
          <div className="col-md-4">
            <Profile
              name="Shyam"
              title="Web developemtn"
              profilepic="./profile.jpeg"
            ></Profile>
          </div>
          <div className="col-md-6">
            CEO and Founder of Springevening Private Limited, Bagalkot I am a
            technology startup founder with a focus on creating hyper-local
            solutions that make a real impact in communities. With a background
            in software development and technology, particularly in the media
            industry, I have a deep understanding of the latest trends and
            opportunities in the field. I have a proven track record of
            successfully leading a team and bring a wealth of experience in
            product development, marketing, and advertising.
          </div>
        </div>
        {/* <ItemList items={items} /> */}
      </div>
    </>
  );
};
export default Hero;
