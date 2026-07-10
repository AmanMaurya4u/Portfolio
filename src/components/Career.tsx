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
              <h3>2026</h3>
            </div>
            <p>
              Working as a .NET Intern, developing enterprise-grade full-stack web applications and RESTful APIs using ASP.NET MVC, C#, and MySQL.
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
              Winner of the GDG Hackathon 2026 for developing an innovative AI-powered solution. Also recognized by the AWS Cloud Club (University of Lucknow) and earned Google Cloud &amp; Firebase Skill Badges.
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
              Pursuing Bachelor of Computer Applications (2023–2026) with a focus on Full Stack Development, C#, ASP.NET MVC, React.js, Node.js, JavaScript, MySQL, MongoDB, and modern web technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate (Class 12)</h4>
                <h5>Excellent School</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Successfully completed Higher Secondary Education (Class 12) in 2022 from Excellent School with a strong academic foundation and interest in Computer Science and Technology.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>High School (Class 10)</h4>
                <h5>Excellent School</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Successfully completed High School (Class 10) in 2020 from Excellent School, building a strong foundation in mathematics, science, and computer fundamentals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
