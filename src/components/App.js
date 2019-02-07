import React from 'react'
import SongList from './SongList.js'
import SongDetail from './SongDetail.js'


const App = () => {
return (
  <div className='ui container grid'>
  <div className='ui riw'>
  <div className='column eight wide'>
    <SongList />
  </div>
  <div className='column eight wide'>
    <SongList />
  </div>
  </div>
  </div>
)
}


export default App