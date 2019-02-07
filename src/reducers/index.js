import { combineReducers } from 'redux'

const songsReducer = () => {
 return [
   {title: "Love will tear us apart", duration: '3:45'},
   {title: "smell like teen spirt", duration: '4:09'},
   {title: "I want you", duration: '6:45'},
   {title: "zombie", duration: '5:45'}

 ] 
}


const selectSongReducer = (selectSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
      return action.payLoad
    } else {
      return selectSong
    }
}

export default combineReducers({
  songs: songsReducer,
selectedSong: selectSongReducer
})