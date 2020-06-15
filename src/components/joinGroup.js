import React from 'react';
import PropTypes from 'prop-types';
import { Route, BrowserRouter } from 'react-router-dom';

const JoinGroup = ({ group }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h2 className='card-title'>Groups I am part of</h2>
      </div>
      <ul className='list-group list-group-flush' >
        <li className='list-group-item'>Group 1</li>
        <li className='list-group-item'>Group 2</li>
        <li className='list-group-item'>Group 3</li>
        <li className='list-group-item'>Group 4</li>
        <li className='list-group-item'>Group 5</li>
      </ul>
    </div>
  );
};

JoinGroup.propTypes = {
  group: PropTypes.object.isRequired
}

export default JoinGroup;
