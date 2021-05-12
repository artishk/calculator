import React,{ Component } from 'react'

export default class Buttons extends Component {
 state={value:''};
 handleClick=async()=>{
  await this.setState({value:this.props.text})
  await this.props.btnValueClicked(this.state.value)
 
 }
  render (){
  return (
    <div 
    style={{width:'35px',height:'35px',backgroundColor:'black',cursor:'pointer'}}
    onClick={this.handleClick}
    >
 {this.props.text} 
 </div>
  ); 
  
}
}


