import React, { Component } from 'react'
import './App.css'
import LikeImage from './components/LikeImage'
import LikePost from './components/LikePost'
class App extends Component {
  render() {
    return (
      <div>
        <LikeImage />
        <span style={{ marginRight: '10px' }}></span>
        <LikePost
        render={({ likePostCounter, handlePostCount }) => (
          <button onClick={handlePostCount}>Like Post {likePostCounter}</button>
        )}
      />
      </div>
    )
  }
}

export default App
