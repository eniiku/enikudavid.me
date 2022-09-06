import './Navbar.scss';

const Navbar = () => (
  <nav className="app__navbar flex--between">
    <p className="app__navbar--logo">eniku.</p>
    <ul className="app__navbar--links flex--center p-text">
      {['works', 'about'].map((item) => (
        <li key={item}>
          <a href={`#${item}`}>{item}</a>
        </li>
      ))}
      <li>
        <button className="app__navbar--btn">Contact Me</button>
      </li>
    </ul>
  </nav>
);

export default Navbar;
