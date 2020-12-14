import React from 'react';
import ReactDOM from 'react-dom';
import MyRecipes from './MyRecipes';

it ('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<div /> , div);
});