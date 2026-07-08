import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>.NET Intern</h4>
                <h5>Augurs Technologies, Lucknow</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Working as a .NET Intern developing enterprise full-stack web applications and RESTful Web APIs using ASP.NET MVC, C#, and MySQL.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>GDG Hackathon Winner</h4>
                <h5>Google Developer Groups (GDG)</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Winner of the GDG Hackathon 2026 for developing an innovative technology solution. Also recognized by AWS Cloud Club (University of Lucknow) and earned Google Cloud &amp; Firebase Skill Badges.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BCA Degree</h4>
                <h5>Shri Ram Swaroop Memorial University</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Pursuing Bachelor of Computer Application (2023 – 2026) with strong focus on C#, JavaScript, React.js, Node.js, and database architectures (MySQL, MongoDB).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
