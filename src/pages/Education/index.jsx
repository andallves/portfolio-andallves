import { EducationContent } from '../../components/EducationContent/indes';
import { H2 } from '../../components/H2';
import './styles.css';

export const Education = () => {
  return (
    <section className="education show-animate" id="education">
      <H2 text={'My'} textSpan={'Journey'} />

      <div className="education-row">
        <div className="education-column">
          <h3 className="title">
            Education <span className="animate scroll"></span>
          </h3>

          <div className="education-box">
            <EducationContent
              titleH3={'Degree - University'}
              paragraph={
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nesciunt reiciendis nostrum optio ipsa maxime dignissimos placeat ratione fugiat debitis! Pariatur aperia sed quidem tempore. Minus corrupti dignissimos voluptatibu deleniti?'
              }
            />
            <EducationContent
              titleH3={'Degree - University'}
              paragraph={
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nesciunt reiciendis nostrum optio ipsa maxime dignissimos placeat ratione fugiat debitis! Pariatur aperia sed quidem tempore. Minus corrupti dignissimos voluptatibu deleniti?'
              }
            />
            <EducationContent
              titleH3={'Degree - University'}
              paragraph={
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nesciunt reiciendis nostrum optio ipsa maxime dignissimos placeat ratione fugiat debitis! Pariatur aperia sed quidem tempore. Minus corrupti dignissimos voluptatibu deleniti?'
              }
            />

            <span className="animate scroll"></span>
          </div>
        </div>

        <div className="education-column">
          <h3 className="title">
            Experience<span className="animate scroll"></span>
          </h3>

          <EducationContent
            titleH3={'Degree - University'}
            paragraph={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nesciunt reiciendis nostrum optio ipsa maxime dignissimos placeat ratione fugiat debitis! Pariatur aperia sed quidem tempore. Minus corrupti dignissimos voluptatibu deleniti?'
            }
          />

          <EducationContent
            titleH3={'Degree - University'}
            paragraph={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nesciunt reiciendis nostrum optio ipsa maxime dignissimos placeat ratione fugiat debitis! Pariatur aperia sed quidem tempore. Minus corrupti dignissimos voluptatibu deleniti?'
            }
          />

          <EducationContent
            titleH3={'Degree - University'}
            paragraph={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nesciunt reiciendis nostrum optio ipsa maxime dignissimos placeat ratione fugiat debitis! Pariatur aperia sed quidem tempore. Minus corrupti dignissimos voluptatibu deleniti?'
            }
          />
          <span className="animate scroll"></span>
        </div>
      </div>
    </section>
  );
};
