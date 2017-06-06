import React from 'react'

var Song = function(props){
  return(
    <div className="song-div">
      <img className="song-img" src={props.img}></img>
      <p className="song-title">Title: {props.title}</p>
      <p className="song-artist">Artist: {props.artist}</p>
      <audio controls name="media">
        <source src={props.preview} type="audio/mp4"/>
      </audio>
      

    </div>
  )
}

export default Song;