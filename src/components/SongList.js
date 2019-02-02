import React from 'react'
import {connect} from 'react-redux'



class SongList extends React.Component {
  renderList() {
    return this.props.map((song) => {
     return <div className="item" key={song.title}>
     <div className="right floated content">
     <button className='ui button primary'>select</button>
     </div>
     <div>{song.title}</div>
     </div>
    })
  }
  
  render() {
    return <div>Song List</div>
  }

}

const mapStateToProps = (state) => {
  return {songs: state.songs};
}

export default connect(mapStateToProps)(SongList);