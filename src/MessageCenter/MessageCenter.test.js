import React from 'react';
import ReactDOM from 'react-dom';
import MessageCenter from './MessageCenter';

it ('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<div /> , div);
});