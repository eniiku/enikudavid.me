import { Form } from '../../components';
import './Contact.scss';

const Contact = () => (
  <section>
    <h1>Get In Touch</h1>
    <div>
      <div className="p--text">
        <span>
          You have some work for me, an idea you think i can help with, want to
          collaborate with me or just say hello ?
        </span>{' '}
        Feel free to shoot me an email! Don't worry i don't bite
      </div>
      <Form />
    </div>
  </section>
);

export default Contact;
