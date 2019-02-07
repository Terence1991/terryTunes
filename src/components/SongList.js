import React from 'react'
import {connect} from 'react-redux'
import {selectSong} from '../actions'



class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
     return <div className="item" key={song.title}>
     <div className="right floated content">
     <button onClick={() => this.props.selectSong()} className='ui button primary'>select</button>
     </div>
     <div>{song.title}</div>
     </div>
    })
  }
  
  render() {
    console.log(this.props)
    return <div className="ui dividied list">{this.renderList()}t</div>
  }

}

const mapStateToProps = (state) => {
  return {songs: state.songs};
}

export default connect(mapStateToProps, {
  selectSong: selectSong
})(SongList);