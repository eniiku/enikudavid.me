import { useState } from 'react';

const Contact = () => {
  const [formData, setformData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formData;

  return (
    <section>
      <h1>Get In Touch</h1>
      <div>
        <div>
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
            />
            <input
              type="email"
              value={email}
              name="email"
              placeholder="Your Email here..."
            />
            <textarea
              name="message"
              value={message}
              placeholder="Type your message here..."
            />
          </div>
          <button>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
