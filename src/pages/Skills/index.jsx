import './Skills.css';
import { H2 } from '../../components/H2';
import { SkillsCards } from '../../components/SkillsCards';

export const Skills = () => {
  return (
    <>
      <section className="skills show-animate" id="skills">
        <H2 text={'My'} textSpan={'Skills'} />
        <SkillsCards />
      </section>
    </>
  );
};
