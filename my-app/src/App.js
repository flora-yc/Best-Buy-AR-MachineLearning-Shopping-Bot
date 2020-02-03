import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ChatUx } from "chatux";
import Laptop1 from "./l1.png";
import Laptop2 from "./l2.png";
import Laptop3 from "./l3.png";
import Laptop4 from "./l4.png";
import Laptop5 from "./l5.png";
import Hiro from "./hiro.png";
import HomeTheatre from "./ht.png";
import Monitor from "./mon.png";
import Television from "./tv.png"
import SoundSystem from "./soundsystem.jpg";
import Sound from "./sound.jpg";
import Mouse from "./newmouse.jpg";

// class DisplayItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div id={this.src} className={this.type}>
//         <img src={this.src}></img>
//         <h2>{this.desc}</h2>
//       </div>
//     );
//   }
// }

let arr = new Array();
    let l1 = (
      <div id={"l1"} className={"laptop"}>
        <div id="leftChild">
          <img id="laptop" src={Laptop1}></img>
        </div>
        <div id="rightChild">
          <h2>{"Samsung Chromebook"}</h2>
          <img id="hiro" src={Hiro}/>
        </div>
        
      </div>
    );
    let l2 = (
      <div id={"l2"} className={"laptop"}>
        <div id="leftChild">
          <img id="laptop" src={Laptop2}></img>
        </div>
        <div id="rightChild">
          <h2>{"MacBook Air"}</h2>
          <img id="hiro" src={Hiro}/>
        </div>
        
      </div>
    );
    let l3 = (
      <div id={"l3"} className={"laptop"}>
        <div id="leftChild"><img id="laptop" src={Laptop3}></img></div>
        <div id="rightChild">
          <h2>{'Macbook Pro 16"'}</h2>
        <img id="hiro" src={Hiro}/>
        </div>
        
      </div>
    );
    let l4 = (
      <div id={"l4"} className={"laptop"}>
        <div id="leftChild">
          <img id="laptop" src={Laptop4}></img>
        </div>
        <div id="rightChild">
          <h2>{"Dell XPS 15"}</h2>
          <img id="hiro" src={Hiro}/>
        </div>
        
        
      </div>
    );
    let l5 = (
      <div id={"l5"} className={"laptop"}>
        <div id="leftChild">
          <img id="laptop" src={Laptop5}></img>
        </div>
        <div id="rightChild">
          <h2>{"Surface Book 2"}</h2>
          <img id="hiro" src={Hiro}/>
        </div>
      </div>
    );
    let ht = (
      <div id={"ht"} className={"laptop"}>
        <div id="leftChild">
          <img id="laptop" src={HomeTheatre}></img>
        </div>
        <div id="rightChild">
          <h2>{"Home Theatre"}</h2>
          <img id="hiro" src={Hiro}/>
        </div>
      </div>
    );
    let tv = (
            <div id={"ht"} className={"laptop"}>
        <div id="leftChild">
          <img id="laptop" src={Television}></img>
        </div>
        <div id="rightChild">
          <h2>{"TV"}</h2>
          <img id="hiro" src={Hiro}/>
        </div>
      </div>
    );
    let m = (
    <div id={"mon"} className={"laptop"}>
    <div id="leftChild">
      <img id="laptop" src={Monitor}></img>
    </div>
    <div id="rightChild">
      <h2>{"Samsung Ultrawide Monitor"}</h2>
      <img id="hiro" src={Hiro}/>
    </div>
  </div>
);
let s = (
  <div id={"mon"} className={"laptop"}>
  <div id="leftChild">
    <img id="laptop" src={Sound}></img>
  </div>
  <div id="rightChild">
    <h2>{"5.1 Surround Sound System"}</h2>
    <img id="hiro" src={Hiro}/>
  </div>
</div>
);
let mouse = (
  <div id={"mon"} className={"laptop"}>
  <div id="leftChild">
    <img id="laptop" src={Mouse}></img>
  </div>
  <div id="rightChild">
    <h2>{"Logitech MX Master 2S Mouse"}</h2>
    <img id="hiro" src={Hiro}/>
  </div>
</div>
);
    let arr0 = [tv, ht, s];
    arr.push(l2, l3, l4, l5);
    let arr1 = [l3, l4, l5];
    let arr2 = [l3];
    let arr4 = [m];
    let arr9 = [tv];
    let peripherals = [mouse];

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchTerm: "",
      displayItems: arr0,
      currState: 0,
    };

  }

  handleClick(e) {

    // Programming MBAir
    if (this.state.currState == 0) {
      this.setState({displayItems: arr9, currState: 1})
    }
    if (this.state.currState == 1) {
      this.setState({displayItems: arr, currState: 2})
    }
    // More Powerful
    if (this.state.currState == 2) {
      this.setState({displayItems: arr1, currState: 3})
    }
    // More RAM 
    if (this.state.currState == 3) {
      this.setState({displayItems: arr2, currState: 4})
    }
    // Peripherals 
    if (this.state.currState == 4) {
      this.setState({displayItems: peripherals, currState: 5})
    }
    // Monitor 
    if (this.state.currState == 5) {
      this.setState({displayItems: arr4, currState: 6})
    }
        // MacBook Pro 
        if (this.state.currState == 6) {
          this.setState({displayItems: arr2})
        }

    
  }

  // componentDidMount() {
  //   setTimeout(function() {
  //     this.setState({searchTerm: document.getElementsByClassName('wc-message-from wc-message-from-bot')[document.getElementsByClassName('wc-message-from wc-message-from-bot') - 1]});
  //   }, 3000);
  //   console.log(this.state.searchTerm);
  // }
  render() {
    return (
      <div>
        <button id="transparentButton" label="oof" className="button" onClick={this.handleClick.bind(this)}>"oof"     </button>
        {this.state.displayItems}
      </div>
    )
      
  }
}


export default App;

new MutationObserver(function(mutations) {
  mutations.some(function(mutation) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
      console.log(mutation);
      console.log('Old src: ', mutation.oldValue);
      console.log('New src: ', mutation.target.src);
      return true;
    }

    return false;
  });
}).observe(document.body, {
  attributes: true,
  attributeFilter: ['src'],
  attributeOldValue: true,
  characterData: false,
  characterDataOldValue: false,
  childList: false,
  subtree: true
});

