import SLCPhoto from './photos/the_slc_gang.jpeg';
import Marquee from 'react-marquee-slider';
import times from 'lodash/times';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title App-title-top">A look back at...</h1>

        <div className="App-letter-container">
          <div className="letter-container">
            <p className="App-description">Greetings IJHS fellows! We hope you are doing well.</p>
            <p className="App-description">
              We want to share a big thank you for being one of the <span className="hover-underline-animation">180+ scholars</span> from <span className="hover-underline-animation">more than 14 countries</span> in our 5th-ever YALA Camp, also the first in-person camp since the pandemic in 2022.
              We enjoyed hearing all of your great ideas and seeing all of you blossom into great young leaders throughout the camp - we really hope you enjoyed it as well!
            </p>
            <p className="App-description">
              Throughout the camp, we took <span className="hover-underline-animation">a lot of pictures</span> about the various activities and events that happened, and we want to share them with you.
              Thanks again for joining us, and we hope to <span className="hover-underline-animation">see you again in 2023!</span>
            </p>
            <p className="App-author">
              - The IJHS Global Student Leadership Council (GSLC)
            </p>
          </div>

          <div className="photo-container">
            <img src={SLCPhoto} className="App-SLC-photoshoot" alt="SLC" />
          </div>
        </div>

        <h1 className="App-title App-title-right">...YALA Camp 2022!</h1>
      </header>

      <main className="App-main" id="photos">
      </main>

      <footer className="App-rolling-text">
        <div className="App-rolling-text-container">
          <Marquee velocity={12}>
            {times(10, Number).map(id => (
              <p key={id} className="App-rolling-text-content">
                Thanks a lot for joining us for YALA Camp 2022!
              </p>
            ))}
          </Marquee>
        </div>
      </footer>
    </div>
  );
}

export default App;
