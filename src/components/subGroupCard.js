import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';


const subGroupCard = ({group}) => {
    return(
      <div className = 'sub-card'>
          <div className = 'sub-card-body'>
                <h2 className = 'sub-card-title'> more info </h2>
          </div>
          <ul className = 'list-group list-group-flush'>
           <li className='list-group-item'>{`Time Period: ${group.timeperiod}`}</li>
           <li className='list-group-item'>{`Frequency: ${group.frequency}`}</li>
           <li className='list-group-item'>{`Group Creator: ${group.groupcreator}`}</li>
          </ul>
      </div>
    );
}

export default subGroupCard;
