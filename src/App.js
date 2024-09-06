import tg from './assets/tg.svg';
import tw from './assets/tw.svg';
import dex from './assets/dex.svg';
import mainDog from './assets/main.png';
import img1 from './assets/dog1.png';
import img2 from './assets/dog2.png'
import img3 from './assets/dog3.png'
import img4 from './assets/dog4.png'
import img5 from './assets/dog5.png'
import img6 from './assets/dog6.png'
import img7 from './assets/dog7.png'
import img8 from './assets/dog8.png'
import img9 from './assets/dog9.png'
import img10 from './assets/dog10.png'
import img11 from './assets/dog11.png'
import img12 from './assets/dog12.png'
import img13 from './assets/dog13.png'
import img14 from './assets/dog14.png'
import elon from './assets/elon.png'
import boden from './assets/boden.png'
import sound from './assets/music/music.mp3';
import Popup from "./component/Popup.js";
import new1 from "./assets/new1.png";
import new2 from "./assets/new2.png";
import new3 from "./assets/new3.png";
import new4 from "./assets/new4.png";
import Overlay from "./component/Overlay.js"

import './App.css';

function App() {
  
  const ticker = "HOPIN";
  const ca = "tba";

  const popupContent = [
    {
      image: new1,
      name: "Pavel Durov KILLED : LIVE",
      description: "21 Savage Killed Pavel with his glock bullet",
    },
    {
      image: new2,
      name: "Kim Jong-un Bought Eddies Business",
      description: "New king of Stake.com $HOPIN",
    },
    {
      image: new3,
      name: "DONALD TRUMP BECOME President",
      description: "Bitcoin is worth 1,000,000$ per coin",
    },
    {
      image: new4,
      name: "JOE DIED",
      description: "Boden is dead , crypto is overloaded..",
    },
    // Add more objects as needed
  ];

  const playAudio = () => {
    const audio = document.querySelector('.audio');
    if (audio) {
      audio.play();
    }
  };

  return (
    <div className="App">
      <Overlay playAudio={playAudio} />
      <audio autoPlay className="audio" loop>
          <source src={sound} type="audio/mp3" />
          Your browser does not support the audio element.
      </audio>
      <div className="layout">
        <div className="main">
          <div className="logoBlock">
          <img alt="elon" className="elon" src={elon}/>
          <h2 className="heading2">HAND OF POLITICALY<br/> INSANE NONSENSE</h2>
          <p className="caname">ca: {ca}</p>
          </div>
          <div className="dogSocBtn">
            <img alt="dog" className="mainDog" src={mainDog}/>
            <div className="buttonBlock">
              <a href="https://raydium.io/" target="_blank" rel="noreferrer"><button className="button">BUY ${ticker}</button></a>
            </div>
            <div className="socialBlock">
              <a href="https://t.me/printconfidential" target="_blank" rel="noreferrer"><img alt="telegram" className="social" src={tg}/></a>
              <a href="https://twitter.com/solconfidential" target="_blank" rel="noreferrer"><img alt="x" className="social" src={tw}/></a>
              <a href="https://dexscreener.com/solana/" target="_blank" rel="noreferrer"><img alt="dexscreener" className="social" src={dex}/></a>
            </div>
          </div>
        </div>
      </div>
      <Popup content={popupContent}/>
      <div className="section2">
        <h2 className="heading">FREE PAVEL DUROV #HOPIN OUTSIDE</h2>
        <div className="runningBlock">
          <div className="runningBlockInside">
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img1} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img2} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img3} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img4} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img5} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img6} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img7} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img1} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img2} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img3} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img4} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img5} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img6} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img7} />
            </div>
          </div>
        </div>
        <div className="runningBlock2">
          <div className="runningBlockInside2">
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img8} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img9} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img10} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img11} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img12} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img13} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img14} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img8} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img9} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img10} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img11} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img12} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img13} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img14} />
            </div>
          </div>
        <div>
      </div>
      </div>
      <div className="section3">
        <img alt="elon" className="boden" src={boden}/>
          <h2 className="heading2">WHY YOU ALWAYS MISS?</h2>
          <p className="subHeading">Don’t steal, don’t lie and don’t cheat.The government hates competition.</p>
      </div>
      <div className="copy">
      <p className="copyText">All Right Reserved $HOPIN 2024</p>
    </div>
    </div>
    </div>
  );
}

export default App;
