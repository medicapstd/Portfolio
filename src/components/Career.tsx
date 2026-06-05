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
                <h4>BCA (Bachelor of Computer Applications)</h4>
                <h5>Computer Science Foundation</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              Currently doing my BCA degree where I'm learning programming,
              databases, and how software systems work. This is where I got
              hooked on coding and started building my own projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer</h4>
                <h5>API Architecture</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Started building APIs using Python frameworks like FastAPI and Flask.
              Learned how to connect frontend apps to backend servers and
              handle data securely.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python & AI Developer</h4>
                <h5>Open Source & Freelance</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Working on real projects like SubsiGuard (a fraud detection app)
              and Jarvis-AI (a voice assistant). Learning more about AI and
              machine learning every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
