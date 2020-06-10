import React from 'react';
import PropTypes from 'prop-types';

const GroupCard = ({ group }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h2 className='card-title'>{`#${group.challenge}`}</h2>
      </div>
      <ul className='list-group list-group-flush' >
        <li className='list-group-item'>{`Time Period: ${group.timeperiod}`}</li>
        <li className='list-group-item'>{`Frequency: ${group.frequency}`}</li>
        <li className='list-group-item'>{`Enrollment: ${group.enrollment}`}</li>
        <li className='list-group-item'>{`Group Creator: ${group.groupcreator}`}</li>
      </ul>
    </div>
  );
};

GroupCard.propTypes = {
  group: PropTypes.object.isRequired
}

export default GroupCard;