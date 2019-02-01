import React from 'react'
import {connect} from 'react-redux'

const App = () => {
return (
  <div>
    <songList />
  </div>
)
}


export default connect()(App);