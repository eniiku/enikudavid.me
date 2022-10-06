import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import './Form.scss';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { name, email, message } = formData;

  const [isLoading, setIsLoading] = useState(false);
  const form: any = useRef();

  function handleInput(e: any) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        'service_982w52s',
        'template_56ymk5v',
        form.current,
        'w00fj6hp4KXcAjkyT'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setIsLoading(false);
  }
  return (
    <form ref={form} onSubmit={handleSubmit} className="app__form">
      <div className="app__form--inline">
        <div>
          <label htmlFor="name">your name</label>
          <input
            id="name"
            type="text"
            value={name}
            name="name"
            placeholder="Your Full Name..."
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="email">email address</label>
          <input
            id="email"
            type="email"
            value={email}
            name="email"
            placeholder="Your Email here..."
            onChange={handleInput}
          />
        </div>
      </div>
      <div>
        <label htmlFor="message">your message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          placeholder="Type your message here..."
          onChange={handleInput}
        />
      </div>
      <button onClick={handleSubmit}>
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default Form;
