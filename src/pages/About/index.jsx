import profilePhoto from '../../assets/img/about.png';
import './About.css';

export const About = () => {
  return (
    <section className="about show-animate" id="about">
      <h2 className="heading">
        About <span>Me</span>
        <span className={`animate scroll`}></span>
      </h2>

      <div className="about-img">
        <img src={profilePhoto} alt="Profile Photo" />
        <span className="circle-spin"></span>
        <span className={`animate scroll`}></span>
      </div>

      <div className="about-content">
        <h3>
          Frontend Developer!
          <span className={`animate scroll`}></span>
        </h3>
        <p>
          Quando eu tive o primeiro contato com a programação me identifiquei
          muito, e desde então venho buscando aprender novas tecnologias e
          praticando diariamente, dessa forma sinto-me opto para contribuir,
          assim busco minha primeira oportunidade. Sou um pouco tímido mas gosto
          de trabalhar em equipe e prezo por uma boa comunicação, pois acredito
          que a troca de experiência é sempre valida.
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
