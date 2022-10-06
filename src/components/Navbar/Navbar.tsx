import { useEffect, useState } from 'react';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import './Navbar.scss';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [contactBtn, setContactBtn] = useState(false);

  function toggleMenu() {
    setMenu((prevMenu) => !prevMenu);
  }

  function handleOnMouseOver() {
    setContactBtn((prevContactBtn) => !prevContactBtn);
  }

  function handleOnMouseLeave() {
    setContactBtn((prevContactBtn) => !prevContactBtn);
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const navbar: any = document.querySelector('.app__navbar');

      navbar.classList.toggle('active', window.scrollY > 0);
    });
  }, [window]);

  return (
    <nav className="app__navbar flex--between">
      <p className="app__navbar--logo">
        <a href="#home">eniku.</a>
      </p>
      <div className="app__navbar--links flex--center p--text">
        <ul className="flex--center">
          {['about'].map((item) => (
            <li key={item}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
          <li>
            <a href="#contact">
              <button
                className={
                  contactBtn ? 'app__navbar--btn-open' : 'app__navbar--btn'
                }
                onMouseEnter={handleOnMouseOver}
                onMouseLeave={handleOnMouseLeave}
              >
                {contactBtn ? (
                  <>
                    <AiOutlineMail />
                    <p>Get In Touch</p>
                  </>
                ) : (
                  <AiOutlineMail />
                )}
              </button>
            </a>
          </li>
        </ul>
      </div>
      <div className="app__navbar--menu">
        <HiMenuAlt4 onClick={toggleMenu} />
        {menu && (
          <section>
            <HiX onClick={toggleMenu} />
            <ul className="emphasis--text">
              {['home', 'works', 'about', 'contact'].map((item) => (
                <li key={`link-${item}`}>
                  <a href={`#${item}`} onClick={toggleMenu}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div>
              <a href="https://github.com/eniiku">
                <AiOutlineGithub />
              </a>
              <a href="https://linkedin.com/davidenikuomehin">
                <AiOutlineLinkedin />
              </a>
              <a href="https://twitter.com/eniku">
                <AiOutlineTwitter />
              </a>
            </div>
          </section>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
