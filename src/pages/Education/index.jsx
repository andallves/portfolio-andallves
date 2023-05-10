import { H2 } from '../../components/H2';
import './Education.css';

export const Education = () => {
  return (
    <>
      <section className="education show-animate" id="education">
        <H2 text={'My'} textSpan={'Journey'} />

        <div className="education-row">
          <div className="education-column">
            <h3 className="title">
              Education <span className="animate scroll"></span>
            </h3>

            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calendar"></i>2018 - 2025
                  </div>
                  <h3>
                    Degree - University <span className="animate scroll"></span>
                  </h3>
                  <p>
                    {' '}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae nesciunt reiciendis nostrum optio ipsa maxime
                    dignissimos placeat ratione fugiat debitis! Pariatur aperiam
                    sed quidem tempore. Minus corrupti dignissimos voluptatibus
                    deleniti?
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calendar"></i>2018 - 2025
                  </div>
                  <h3>Degree - University</h3>
                  <p>
                    {' '}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae nesciunt reiciendis nostrum optio ipsa maxime
                    dignissimos placeat ratione fugiat debitis! Pariatur aperiam
                    sed quidem tempore. Minus corrupti dignissimos voluptatibus
                    deleniti?
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calendar"></i>2018 - 2025
                  </div>
                  <h3>Degree - University</h3>
                  <p>
                    {' '}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae nesciunt reiciendis nostrum optio ipsa maxime
                    dignissimos placeat ratione fugiat debitis! Pariatur aperiam
                    sed quidem tempore. Minus corrupti dignissimos voluptatibus
                    deleniti?
                  </p>
                </div>
              </div>

              <span className="animate scroll"></span>
            </div>
          </div>

          <div className="education-column">
            <h3 className="title">
              Experience<span className="animate scroll"></span>
            </h3>

            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calendar"></i>2018 - 2025
                  </div>
                  <h3>Web developer - Company</h3>
                  <p>
                    {' '}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae nesciunt reiciendis nostrum optio ipsa maxime
                    dignissimos placeat ratione fugiat debitis! Pariatur aperiam
                    sed quidem tempore. Minus corrupti dignissimos voluptatibus
                    deleniti?
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calendar"></i>2018 - 2025
                  </div>
                  <h3>Web developer - Company</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae nesciunt reiciendis nostrum optio ipsa maxime
                    dignissimos placeat ratione fugiat debitis! Pariatur aperiam
                    sed quidem tempore. Minus corrupti dignissimos voluptatibus
                    deleniti?
                  </p>
                </div>
              </div>
              <span className="animate scroll"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
