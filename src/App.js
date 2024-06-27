import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
class App extends Component {
    state={
        advice: ''
    };
    componentDidMount(){
        // console.log("component did mount")
        // axios.get();
        this.fetchAdvice();
    }

    fetchAdvice = ()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=>{
            const {advice} = response.data.slip;
            // console.log(advice)
            //if the state name and value are same then use only one name
            this.setState({advice})
        })
        .catch((error)=>{
            console.log(error)
        })
    }

  render() {
    const {advice}=this.state;
    return (
     <div className="app">
        <div className="card">
            <h1 className='heading'>{advice}</h1>
            <button className='button' onClick={this.fetchAdvice}><span>
                GIVE ME ADVICE!
                </span></button>
        </div>
     </div>
    )
  }
}

export default App

