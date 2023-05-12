import { H2 } from '../../components/H2';
import { InputField } from '../../components/InputFiled';
import './styles.css';

export const Contact = () => {
  return (
    <section className="contact show-animate" id="contact">
      <H2 text={'Contact'} textSpan={'Me'} />

      <form action="#">
        <div className="input-box">
          <InputField type={'text'} placeholder={'Full Name'} />

          <InputField type={'email'} placeholder={'Email Adress'} />

          <span className="animate scroll"></span>
        </div>

        <div className="input-box">
          <InputField type={'number'} placeholder={'Mobile Number'} />

          <InputField type={'email'} placeholder={'Email Subject'} />

          <span className="animate scroll"></span>
        </div>

        <div className="textarea-field">
          <textarea
            rows="10"
            cols="30"
            placeholder="Your message"
            required
          ></textarea>
          <span className="focus"></span>

          <span className="animate scroll"></span>
        </div>

        <div className="btn-box btns">
          <button type="submit" className="btn">
            Submit
          </button>
          <span className="animate scroll"></span>
        </div>
      </form>
    </section>
  );
};
