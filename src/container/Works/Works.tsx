import './Works.scss';

const Works = () => {
  return (
    <section id="works" className="app__works app__wrapper">
      <main className="app__works--carousel" data-carousel>
        <button className="app__works--btn" data-carousel-button="prev">
          prev
        </button>
        <button className="app__works--btn" data-carousel-button="next">
          next
        </button>
        <ul data-slides>
          <li className="app__works--slide" data-active>
            <div
              style={{
                background: 'red',
              }}
            >
              1
            </div>
          </li>
          <li className="app__works--slide">
            <div
              style={{
                background: 'blue',
              }}
            >
              2
            </div>
          </li>
          <li className="app__works--slide">
            <div
              style={{
                background: 'green',
              }}
            >
              3
            </div>
          </li>
          <li className="app__works--slide">
            <div
              style={{
                background: 'yellow',
              }}
            >
              4
            </div>
          </li>
          <li className="app__works--slide">
            <div
              style={{
                background: 'purple',
              }}
            >
              5
            </div>
          </li>
          <li className="app__works--slide">
            <div
              style={{
                background: 'orange',
              }}
            >
              6
            </div>
          </li>
        </ul>
      </main>
    </section>
  );
};

export default Works;
