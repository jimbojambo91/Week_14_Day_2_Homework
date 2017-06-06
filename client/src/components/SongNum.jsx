import React from 'react'

var SongNum = function(props){
  return(
    <div className="song-pos-div">
      <h2 className="chart-pos-heading">{props.chartPosition}</h2>
    </div>
  )
}

export default SongNum;