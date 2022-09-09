import { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const { name, email, message } = formData;

  function handleInput(e: any) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit() {
    setIsLoading(true);

    console.log('successfull!');

    setIsLoading(false);
  }

  console.log(formData);

  return (
    <section>
      <h1>Get In Touch</h1>
      <div>
        <div className="p--text">
          <span>
            You have some work for me, an idea you think i can help with, want
            to collaborate with me or just say hello ?
          </span>{' '}
          Feel free to shoot me an email! Don't worry i don't bite
        </div>
        <form>
          <div>
            <input
              type="text"
              value={name}
              name="name"
              placeholder="Your Full Name..."
              onChange={handleInput}
            />
            <input
              type="email"
              value={email}
              name="email"
              placeholder="Your Email here..."
              onChange={handleInput}
            />
            <textarea
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
      </div>
    </section>
  );
};

export default Contact;
