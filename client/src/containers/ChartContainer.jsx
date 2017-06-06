import React from 'react'
import ChartList from '../components/ChartList'

class ChartContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []
    };
  }
  render(){
    return(
      <div className="chart-heading">
        <h1 className="chart-heading">Top 20 Chart</h1>
        <ChartList songs={ this.state.songs }/>
      </div>
  )}
  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if(request.status !==200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({songs: data.feed.entry})
    });
    request.send();
  }
}

export default ChartContainer