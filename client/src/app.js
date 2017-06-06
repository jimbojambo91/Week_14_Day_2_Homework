import React from 'react';
import ReactDOM from 'react-dom';
import ChartContainer from './containers/ChartContainer.jsx';

window.addEventListener('load', () => {
  const targetDiv = document.getElementById('app');
  ReactDOM.render(<ChartContainer/>, targetDiv);
});
