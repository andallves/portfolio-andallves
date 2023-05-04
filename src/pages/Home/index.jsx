import { Button } from '../../components/Button';
import './Home.css';

export const Home = () => {
  return (
    <>
      <section className={`home show-animate`} id="home">
        <div className="home-content">
          <h1>
            Hi, I&lsquo;m <span>Andre Alves</span>{' '}
            <span className="animate" style="--i:2;"></span>
          </h1>
          <div className="text-animate">
            <h3>Frontend Developer</h3>
            <span className="animate" style="--i:3;"></span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam natus
            corrupti laudantium, eligendi ab expedita quam fuga sint culpa
            voluptatem veniam obcaecati accusantium dolorum totam iure maxime,
            fugit illum! Pariatur.
            <span className="animate" style="--i:4;"></span>
          </p>

          <div className="btn-box">
            <Button to={'#'} text={'Hire Me'} />
            <Button to={'#'} text={`Let&lsquo;s Talk`} />
            <span className="animate" style="--i:5;"></span>
          </div>

          <div className="home-sci">
            <a href="#">
              <i className={`bx bxl-instagram`}></i>
            </a>
            <a href="#">
              <i className={`fa-brands fa-github-alt`}></i>
            </a>
            <a href="#">
              <i className={`bx bxl-linkedin`}></i>
            </a>
            <span className="animate" style="--i:6;"></span>
          </div>

          <div className="home-imgHover"></div>
          <span className={`animate home-img`} style="--i:7;"></span>
        </div>
      </section>
    </>
  );
};
