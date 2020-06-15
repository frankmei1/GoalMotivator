import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';


const SubGroupCard = (props) => {
  const group = props.location.aboutProps.group
    return(
      <div className = 'sub-card'>
         <img src={group.img.src} className='card-img-top' alt={group.img.alt} />
          <div className = 'sub-card-body'>
                <h2 className = 'sub-card-title'> more info </h2>
          </div>
          <ul className = 'list-group list-group-flush'>
           <li className='list-group-item'>{`Challenge: ${group.challenge}`}</li>
           <li className='list-group-item'>{`Time Period: ${group.timeperiod}`}</li>
           <li className='list-group-item'>{`Frequency: ${group.frequency}`}</li>
           <li className='list-group-item'>{`Enrollment: ${group.enrollment}`}</li>
           <li className='list-group-item'>{`Group Creator: ${group.groupcreator}`}</li>
           <li className='list-group-item'>{`Group Description: ${group.description}`}</li>
           <li className='list-group-item'>{`Group Members: ${group.groupmembers}`}</li>
          </ul>
      </div>
    );
}

export default SubGroupCard;
