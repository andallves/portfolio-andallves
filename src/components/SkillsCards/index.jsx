import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiReact,
} from 'react-icons/si';
import { Card } from '../Card';
import './styles.css';

export const SkillsCards = () => {
  return (
    <div className={`technologies`}>
      <Card title={'HTML5'} img={<SiHtml5 />} customClass={'orange'} />
      <Card title={'CSS3'} img={<SiCss3 />} customClass={'blue'} />
      <Card
        title={'JavaScript'}
        img={<SiJavascript />}
        customClass={'yellow'}
      />
      <Card
        title={'TypeScript'}
        img={<SiTypescript />}
        customClass={'bluedark'}
      />
      <Card title={'BootStrap'} img={<SiBootstrap />} customClass={'purple'} />
      <Card title={'Node'} img={<SiNodedotjs />} customClass={'green'} />
      <Card title={'Express'} img={<SiExpress />} customClass={'ex'} />
      <Card title={'MongoDB'} img={<SiMongodb />} customClass={'greensheat'} />
      <Card title={'Git'} img={<SiGit />} customClass={'orange'} />
      <Card title={'React'} img={<SiReact />} customClass={'blue'} />
    </div>
  );
};
