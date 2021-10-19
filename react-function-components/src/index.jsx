import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return <button>Click {props.type}</button>;
}

const element = <CustomButton type="Me!" />;
ReactDOM.render(
  element,
  document.querySelector('#root')
);
