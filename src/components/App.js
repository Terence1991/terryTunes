import React from 'react'
import {connect} from 'react-redux'
import SongList from './SongList.js'

const App = () => {
return (
  <div>
    <SongList />
  </div>
)
}

const mapStateToProps = (state) => {
    console.log(state)
    return state;
}

export default connect(mapStateToProps)(App);