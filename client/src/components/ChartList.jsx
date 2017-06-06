import React from 'react'
import Song from './Song.jsx'
import SongNum from './SongNum.jsx'

class ChartList extends React.Component {
  render(){
    const SongNodes = this.props.songs.map((song, index) => {
      return(
        <div className="song-container">
          <SongNum chartPosition={(index + 1)}></SongNum>
          <Song
            key= {song.id.attributes["im:id"]}
            artist= {song["im:artist"].label}
            title= {song["im:name"].label}
            chartPosition={(index + 1)}
            img= {song["im:image"][2].label}
            preview={song.link[1].attributes.href}
          >
          </Song>
        </div>
      )
    })
    return(
      <div>{SongNodes}</div>
    )
  }
}

export default ChartList;