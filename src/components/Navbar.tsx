const Navbar = () => (
  <nav>
    <p>eniku.</p>
    <ul>
      {['about', 'contact'].map((item) => (
        <li key={item}>
          <a href={`#${item}`}>{item}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
