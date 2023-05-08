import './About.css';

export const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="heading">
        About <span>Me</span>
        <span className={`animate scroll`}></span>
      </h2>

      <div className="about-img">
        <img src="img/about.png" alt="" />
        <span className="circle-spin"></span>
        <span className={`animate scroll`}></span>
      </div>

      <div className="about-content">
        <h3>
          Frontend Developer!
          <span className={`animate scroll`}></span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          consectetur sunt totam, quo a aliquid laborum voluptas obcaecati
          debitis tenetur reiciendis facere accusamus amet. Culpa possimus
          corporis dolor quaerat ipsum!
          <span className={`animate scroll`}></span>
        </p>

        <div className={`btn-box btns`}>
          <a href="#" className="btn">
            Read More
          </a>
          <span className={`animate scroll`}></span>
        </div>
      </div>
    </section>
  );
};
