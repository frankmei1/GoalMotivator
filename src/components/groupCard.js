import React from 'react';
import PropTypes from 'prop-types';
import { Route, BrowserRouter } from 'react-router-dom';
import subGroupCard from './subGroupCard';
import { Switch } from '@material-ui/core';

const GroupCard = ({ group }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h2 className='card-title'>{`#${group.challenge}`}</h2>
      </div>
      <ul className='list-group list-group-flush' >
        <li className='list-group-item'>{`Enrollment: ${group.enrollment}`}</li>
      </ul>
      <BrowserRouter>
        <div>   
        <Route path="/learn more" render={ ()=> <subGroupCard group = {group}/> }/>    
        </div>
      </BrowserRouter>
    </div>
  );
};

GroupCard.propTypes = {
  group: PropTypes.object.isRequired
}

export default GroupCard;
