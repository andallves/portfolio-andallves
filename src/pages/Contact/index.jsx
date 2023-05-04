import './Contact.css';

export const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me!</span>
          <span className="animate scroll" style="--i:1;"></span>
        </h2>

        <form action="#">
          <div className="input-box">
            <div className="input-field">
              <input type="text" placeholder="Full Name" required />
              <span className="focus"></span>
            </div>

            <div className="input-field">
              <input type="email" placeholder="Email Adress" required />
              <span className="focus"></span>
            </div>

            <span className="animate scroll" style="--i:3;"></span>
          </div>

          <div className="input-box">
            <div className="input-field">
              <input type="number" placeholder="Mobile Number" required />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input type="email" placeholder="Email Subject" required />
              <span className="focus"></span>
            </div>

            <span className="animate scroll" style="--i:5;"></span>
          </div>

          <div className="textarea-field">
            <textarea
              rows="10"
              cols="30"
              placeholder="Your message"
              required
            ></textarea>
            <span className="focus"></span>

            <span className="animate scroll" style="--i:7;"></span>
          </div>

          <div className="btn-box btns">
            <button type="submit" className="btn">
              Submit
            </button>
            <span className="animate scroll" style="--i:9;"></span>
          </div>
        </form>
      </section>
    </>
  );
};
