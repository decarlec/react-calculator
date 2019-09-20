import React from 'react';
import ReactDOM from 'react-dom';
import KeypadComponent from './App.Key';
import ResultComponent from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<KeypadComponent />, div);
  ReactDOM.render(<ResultComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
