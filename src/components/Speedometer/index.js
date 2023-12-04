import {Component} from 'react'
import './index.css'
class Speedometer extends Component{
    state={count:0}
    accelerateButton=()=>{
        this.setState(prevState=>({count:prevState.count+10}))
    }
    breakButton=()=>{
        this.setState(prevState=>({count:prevState.count-10}))
    }
    render(){
        const {count}=this.state
        return(
            <div className="bg-container">
            <h1 className="heading">SPEEDOMETER</h1>
            <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt="speedometer" className:"image"/>
            <p className="span-element">speed in <span className="span-element">{count}</span>mph</p>
            <p>MinLimit is 0mph,MaxLimit is 200mph</p>
            <div>
            <button className="button1" onClick={this.accelerateButton}>Accelerate</button>
            <button className="button2" onClick={this.breakButton}>Apply Breaks</button>
            </div>

            </div>
        )
    }

}
export default Speedometer