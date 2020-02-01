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

class App extends React.Component {
  constructor(props) {
    super(props);
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
    arr.push(l1, l2, l3, l4, l5);
    this.state = {
      searchTerm: "",
      displayItems: arr
    };
  }

  render() {
    return <div>{this.state.displayItems}</div>;
  }
}

var observeDOM = (function(){
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

  return function( obj, callback ){
    if( !obj || !obj.nodeType === 1 ) return; // validation

    if( MutationObserver ){
      // define a new observer
      var obs = new MutationObserver(function(mutations, observer){
          callback(mutations);
      })
      // have the observer observe foo for changes in children
      obs.observe( obj, { childList:true, subtree:true });
    }
    
    else if( window.addEventListener ){
      obj.addEventListener('DOMNodeInserted', callback, false);
      obj.addEventListener('DOMNodeRemoved', callback, false);
    }
  }
})();

//------------< DEMO BELOW >----------------
// add item
var itemHTML = "<li><button>list item (click to delete)</button></li>",
    listElm = document.querySelector('ol');

document.querySelector('body > button').onclick = function(e){
  listElm.insertAdjacentHTML("beforeend", itemHTML);
}

// delete item
listElm.onclick = function(e){
  if( e.target.nodeName == "BUTTON" )
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
}
    
// Observe a specific DOM element:
observeDOM( listElm, function(m){ 
   var addedNodes = [], removedNodes = [];

   m.forEach(record => record.addedNodes.length & addedNodes.push(...record.addedNodes))
   
   m.forEach(record => record.removedNodes.length & removedNodes.push(...record.removedNodes))

  console.clear();
  console.log('Added:', addedNodes, 'Removed:', removedNodes);
});


// Insert 3 DOM nodes at once after 3 seconds
setTimeout(function(){
   listElm.removeChild(listElm.lastElementChild);
   listElm.insertAdjacentHTML("beforeend", Array(4).join(itemHTML));
}, 3000);

export default App;

// const chatux = new ChatUx();

// chatux.init({
//   api: {
//       endpoint: 'https://bryan-qna-service-bot.azurewebsites.net/api/messages',//chat server
//       method: 'GET',//HTTP METHOD when requesting chat server
//       dataType: 'json'//json or jsonp is available
//   }
// });

// chatux.start();
