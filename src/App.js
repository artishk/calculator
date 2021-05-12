import React, { Component } from 'react'
import Buttons from './components/Buttons';
import './App.css';

export default class App extends Component {
  state={result:0};
  arr=[];

  // evaluateResult=(arr)=>{
  //   let str=''
  //   arr.forEach(ele => {
  //     // eslint-disable-next-line no-unused-vars
  //     str += ele
  //     console.log(str)

  //   });
  // }

  storeValue=(value)=>{
     this.arr.push(value)
     console.log(this.arr);
     let str=''
    this.arr.forEach(ele => {
 
      str+= ele
      
    })
    console.log(str);
  
  }


  render() {
    return (
      <div>
  <div className="App">
  <div className="App-header">
   <div className="result-container">
   <div className="result-item">
   ={this.state.result}
  </div>
   </div>
  
  <div className="grid-container">
  <div className="grid-item">
  <Buttons text="AC" btnValueClicked={this.storeValue}/>
  </div>
  <div className="grid-item">
  <Buttons text="X" btnValueClicked={this.storeValue}/>
  </div>
  <div className="grid-item">
  <Buttons text="%" btnValueClicked={this.storeValue}/>
  </div>  
  <div className="grid-item">
  <Buttons text="/" btnValueClicked={this.storeValue}/>
  </div>
  <div className="grid-item">
  <Buttons text="7" btnValueClicked={this.storeValue}/>
  </div>
  <div className="grid-item">
  <Buttons text="8" btnValueClicked={this.storeValue}/>
  </div>  
  <div className="grid-item">
  <Buttons text="9" btnValueClicked={this.storeValue}/>
  </div>
  <div className="grid-item">
  <Buttons text="*" btnValueClicked={this.storeValue}/>
  </div>
  <div className="grid-item">
  <Buttons text="4" btnValueClicked={this.storeValue}/>
  </div>
  <div className="grid-item">
  <Buttons text="5" btnValueClicked={this.storeValue}/>
  </div>
  <div className="grid-item">
  <Buttons text="6" btnValueClicked={this.storeValue}/>
  </div>
 <div className="grid-item">
  <Buttons text="-" btnValueClicked={this.storeValue}/>
  </div>
  <div className="grid-item">
  <Buttons text="1" btnValueClicked={this.storeValue}/>
  </div>
  <div className="grid-item">
  <Buttons text="2" btnValueClicked={this.storeValue}/>
  </div>
  <div className="grid-item">
  <Buttons text="3" btnValueClicked={this.storeValue}/>
  </div>
  <div className="grid-item">
  <Buttons text="+" btnValueClicked={this.storeValue}/>
  </div>
  <div className="grid-item">
  <Buttons text="." btnValueClicked={this.storeValue}/>
  </div>
  <div className="grid-item">
  <Buttons text="0" btnValueClicked={this.storeValue}/>
  </div>
  <div className="grid-item">
  <Buttons text="()" btnValueClicked={this.storeValue}/>
  </div>
  <div className="grid-item">
  <Buttons text="=" btnValueClicked={this.storeValue}/>
  </div>
  
  </div>
 </div>
 </div> 
      </div>
    )
  }
}
