import './Skills.css';

export const Skills = () => {
  return (
    <>
      <section className="skills" id="skills">
        <h2 className="heading">
          My <span>Skills</span>
          <span className="animate scroll" style="--i:1;"></span>
        </h2>

        <div className="skills-row">
          <div className="skills-column">
            <h3 className="title">
              Coding Skills{' '}
              <span className="animate scroll" style="--i:2;"></span>
            </h3>

            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>
                    HTML <span>90%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>

                <div className="progress">
                  <h3>
                    CSS <span>90%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>

                <div className="progress">
                  <h3>
                    JavaScript <span>90%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>

                <div className="progress">
                  <h3>
                    TypeScript <span>90%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
              </div>

              <span className="animate scroll" style="--i:3;"></span>
            </div>
          </div>

          <div className="skills-column">
            <h3 className="title">
              Professional Skills
              <span className="animate scroll" style="--i:5;"></span>
            </h3>

            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>
                    Web Design <span>90%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>

                <div className="progress">
                  <h3>
                    Web Development <span>90%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>

                <div className="progress">
                  <h3>
                    Graphic Design <span>90%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>

                <div className="progress">
                  <h3>
                    SEO Marketing <span>90%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
              </div>

              <span className="animate scroll" style="--i:6;"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};