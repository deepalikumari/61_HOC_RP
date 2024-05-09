

//USING HIGHER ORDER COMPONENT
//CLASS COMPONENTS
import React, { Component } from 'react'

class LikeImage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count : 0 //state property
    }
  }
  //defining handler
  incrementCount = () =>{
    this.setState(prevState => {
      return {
        count : prevState.count + 1
      }
    })

  } 
  render() {
    const {count} = this.state
    return (
        <div>
        <h1>Some Blog</h1>
        <button onClick={this.incrementCount}>Like Image {count}</button> 
        
        </div>
    )
  }
}

export default LikeImage
