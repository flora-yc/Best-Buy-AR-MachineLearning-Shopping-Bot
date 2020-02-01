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
    arr.push(l5, l2, l3, l4, l1);

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchTerm: "",
      displayItems: [],
    };

  }

  // componentDidMount() {
  //   setTimeout(function() {
  //     this.setState({searchTerm: document.getElementsByClassName('wc-message-from wc-message-from-bot')[document.getElementsByClassName('wc-message-from wc-message-from-bot') - 1]});
  //   }, 3000);
  //   console.log(this.state.searchTerm);
  // }
  render() {
    return <div>{this.state.displayItems}</div>;
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

