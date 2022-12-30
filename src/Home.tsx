import Header from './components/Header';
import Statement from './components/statement';
import About from './components/about/aboutindex';
import Contact from './components/contact';

function Home() {

  return (
    <div className='main'>
      <div className='landing'>
        <Header />
      </div>
      <div className='summary'>
        <Statement />
      </div>
      <div className='about'>
        <About />
      </div>
      <div className='contact'>
        <Contact />
      </div>
    </div>
  );
}

export default Home;