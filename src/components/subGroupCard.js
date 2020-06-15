import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const SubGroupCard = (props) => {
  const group = props.location.aboutProps.group
    return(
      <div className = 'sub-card'>
         <img src={group.img.src} className='card-img-top' alt="" />
          <div className = 'sub-card-body'>
                <h2 className = 'sub-card-title'> more info </h2>
          </div>
          <ul className = 'list-group list-group-flush'>
           <li> Challenge: {group.challenge}</li>
           <li> Time Period: {group.timeperiod}</li>
           <li> Frequency: {group.frequency}</li>
           <li> Enrollment: {group.enrollment}</li>
           <li> Group Creator: {group.groupcreator}</li>
           <li> Group Description: {group.description}</li>
           <li> Group Members: {group.groupmembers}</li>
          </ul>
          <Button variant="outlined" color="primary" type="button">
             join now 
          </Button>
      </div>
    );
}

export default SubGroupCard;
