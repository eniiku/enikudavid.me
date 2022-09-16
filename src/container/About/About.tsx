import './About.scss';

const About = () => {
  return (
    <section className="app__about app--wrapper">
      <h1 className="head--text">About Me</h1>
      <main className="p--text">
        <div className="app__about--main">
          <div>
            Hi there! My name is David Enikuomehin. I am a software engineer who
            specializes in developing creative, interactive and enjoyable web
            applications and experiences. I've always been curious as to why and
            how things work for as long as i can remember. Tinkering and tearing
            apart literally anything I can get my hands on. Putting them back
            together everytime, okay maybe not everytime.
          </div>
          <div>
            In any case, I eventually earned the position of IT support for
            friends and family, a position i take very seriously and great pride
            in. Away from the computer, you can find me playing instruments,
            watching anime, engaging in banter on Twitter, or even touching
            grass. Most importantly, I use Arch, by the way.
          </div>
        </div>
        <div>
          <div>Here are a few technologies I've been using a lot lately:</div>
          <ul className="app__about--tech">
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
      </main>
    </section>
  );
};

export default About;
