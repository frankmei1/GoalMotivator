import React from 'react';
import PropTypes from 'prop-types';
import { Route, BrowserRouter } from 'react-router-dom';

const JoinGroup = ({ group }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h2 className='card-title'>Place Holder</h2>
      </div>
      <ul className='list-group list-group-flush' >
        <li className='list-group-item'>One</li>
      </ul>
    </div>
  );
};

JoinGroup.propTypes = {
  group: PropTypes.object.isRequired
}

export default JoinGroup;
