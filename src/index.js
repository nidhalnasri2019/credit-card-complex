import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();










// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from 'App.js'
// import vista from './vista3.jpg';
// import master from './master.jpg'
// import './index.css';
// class HelloUser extends React.Component {
//     constructor() {
//       super()
//       this.state = {
//         name: 'xxxx',
//         number: '****************',
//         month: 'xx',
//         day: 'xx',
//         ccv: 'CCV'
//       }
//     }
     
//     //Name of Card Owner
//     nameChange(n) {
//       this.setState({
//         name: n.target.value
//       });
//     }
//     //Card Number
//     numberChange(c) {
//       this.setState({
//         number: c.target.value
//       });
//     }
//     //Expiration
//     monthChange(m) {
//       this.setState({
//        month: m.target.value
//       });
//     }
//     dayChange(d) {
//       this.setState({
//        day: d.target.value
//       });
//     }
//     //CCV 
//     ccvChange(v) {
//       this.setState({
//        ccv: v.target.value
//       });
//     }
    
    
//     render() {
//       return <div>
//   <div className="container">
//     
    
//  <div className="row-1 ">
   
//         <div className="row">
//           <div className="small-6 columns">
//             <img className="credit-mc" src={vista} alt="" />
//           </div>
//         </div>
//         <div className="row-2">
//           <div className="column">
//             <p className="credit__card-number">{this.state.number}</p>
//           </div>
//           <div className="small-9 columns">
//             <label>Card Name
//               <p className="credit__name">{this.state.name}</p>
//             </label>
//           </div>
//           <div className="small-3 columns">
//             <label>Valid thru
//               <p className="credit__date">{this.state.month} / {this.state.day}</p>
//             </label>
//           </div>
//         </div>
//         <div className="row-22">
//         <img className="cre" src={master} alt="" />

//         </div>
    //  </div>
//     <div className="row-3">
//           <input className="input" type="text" placeholder="Name" maxLength="20" onChange={this.nameChange.bind(this)}/><br/>
//           <input className="input" type="text" placeholder="Number" maxLength="16" onChange={this.numberChange.bind(this)}/>

//         <div className="row">
//           <label className="column-2">Valid thru:</label><br/><br/>
//           <span className="inputs">
//           <div className="small-4 columns">
//             <input className="input-2" type="text"  placeholder="month" maxLength="2" onChange={this.monthChange.bind(this)} />
//           </div>
//           <div className="small-4 columns end">
//             <input id= "year" className="input-2" type="text" placeholder="year" maxLength="2" onChange={this.dayChange.bind(this)}/>
//           </div>
//           </span>
          
//         </div>
      
//     </div>
//   </div>
//         </div>
//     }
//   }
// render() {



// }

// ReactDOM.render(<App />, document.getElementById('root'));


