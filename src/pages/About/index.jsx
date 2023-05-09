import { Button } from '../../components/Button';
import { H2 } from '../../components/H2';
import { ImageAbout } from '../../components/ImageAbout';
import './styles.css';

export const About = () => {
  return (
    <section className="about show-animate" id="about">
      <H2 text={'About'} textSpan={'Me'} />

      <ImageAbout />

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

        <Button to={'#'} text={'Read More'} customClass={'center'} />
      </div>
    </section>
  );
};
