import React, { Component } from 'react';

import './App.css';
import Card from './card';
import Form from './form';

class App extends Component {
  constructor(props){
    super(props)
      this.state={
       ripstr:'',
       rip:'**** **** **** ****',
       holderName:'HolderName',
       validThru:'XX/XX'
      }
    }

      renderCardNumber(keyword){
        keyword = keyword.toString() 
        
      
    
        return   this.setState({rip: keyword.slice(0,4) + ' ' +  keyword.slice(4,8) + ' ' +  keyword.slice(8,12) + ' ' +  keyword.slice(12)}) 
        
      }

      renderName(keyword1){
        
        return this.setState({ holderName:keyword1.toLocaleUpperCase() })
      }
      
      renderValidThru(keyword2){
      
          keyword2 = keyword2.toString()
          
          return this.setState ({validThru: keyword2.slice(0, 2) + '/' + keyword2.slice(2)})
        
      }
  
  
  
  render() {
    return (
      <div className="App">
    
       <Card changenumber={this.state.rip} 
             changename={this.state.holderName}
             changevalid={this.state.validThru}/>
        <Form tapeNumber={(keyword)=>this.renderCardNumber(keyword)}  
              tapeName={(keyword1)=>this.renderName(keyword1)} 
              tapeValidThru={(keyword2)=>this.renderValidThru(keyword2)}/>
       </div>
    );
  }
}

export default App;

