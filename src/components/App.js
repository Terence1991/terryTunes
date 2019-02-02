import React from 'react'
import {connect} from 'react-redux'

const App = () => {
return (
  <div>
    <songList />
  </div>
)
}

const mapStateToProps = (state) => {
    console.log(state)
    return state;
}

export default connect(mapStateToProps)(App);