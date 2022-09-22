import { useState } from 'react';
import './About.scss';

const About = () => {
  const [read, setRead] = useState(false);

  function toggleReadVisibilty() {
    setRead((prevRead) => !prevRead);
  }

  return (
    <section id="about" className="app__about app--wrapper">
      <h1 className="head--text">About Me</h1>
      <main className="p--text app__about--main flex--center">
        Hi there! My name is David Enikuomehin. I am a software engineer who
        specializes in developing creative, interactive and enjoyable web
        applications and experiences.
        {read && (
          <>
            <span>
              I've always been curious as to why and how things work for as long
              as i can remember. Tinkering and tearing apart literally anything
              I can get my hands on. Putting them back together everytime, okay
              maybe not everytime. In any case, I eventually earned the position
              of IT support for friends and family, a position i take very
              seriously and great pride in. Away from the computer, you can find
              me playing instruments, watching anime, engaging in banter on
              Twitter, or even touching grass.
            </span>
          </>
        )}
        Most importantly, I use Arch, by the way.
        <div className="app__about--tech">
          <p>Here are a few technologies I've been using a lot lately:</p>
          <ul>
            {[
              'React',
              'Next.js',
              'Javascript (ES6+)',
              'Typescript',
              'React Native',
              'Webflow',
            ].map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        <h3 onClick={toggleReadVisibilty}>read more</h3>
      </main>
    </section>
  );
};

export default About;
