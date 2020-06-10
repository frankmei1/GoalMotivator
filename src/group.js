import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function Group({key,name,image}) {
  return (
    <div className="group">
      <h2 key={key}>{name}</h2>
      <img src={image} />
    </div>
  );
}

export default Group;
